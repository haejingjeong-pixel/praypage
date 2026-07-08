import { rm, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(__dirname, "..");
const publicDir = resolve(appRoot, "public");

await rm(publicDir, { recursive: true, force: true });
await mkdir(publicDir, { recursive: true });
await writeFile(resolve(publicDir, ".gitkeep"), "\n");

console.log("Cleaned app/public");
