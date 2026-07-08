import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(__dirname, "..");
const publicDir = resolve(appRoot, "public");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function resolveRequestPath(url) {
  var pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  if (pathname === "/") pathname = "/index.html";

  var target = normalize(join(publicDir, pathname));
  if (target !== publicDir && !target.startsWith(publicDir + sep)) {
    return null;
  }
  return target;
}

const server = createServer(async function (request, response) {
  var target = resolveRequestPath(request.url || "/");
  if (!target) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    var info = await stat(target);
    if (info.isDirectory()) target = join(target, "index.html");
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(target)] || "application/octet-stream"
    });
    createReadStream(target).pipe(response);
  } catch (error) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, host, function () {
  console.log(`Prayer Page preview: http://${host}:${port}`);
});
