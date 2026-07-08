import { cp, mkdir, rm, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { staticEntries } from "../src/static-manifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(__dirname, "..");
const projectRoot = resolve(appRoot, "..");
const publicDir = resolve(appRoot, "public");

await rm(publicDir, { recursive: true, force: true });
await mkdir(publicDir, { recursive: true });

for (const entry of staticEntries) {
  const source = resolve(projectRoot, entry);
  const target = resolve(publicDir, entry);

  try {
    await stat(source);
  } catch (error) {
    console.warn(`Skipped missing static entry: ${entry}`);
    continue;
  }

  await cp(source, target, {
    recursive: true,
    force: true,
    errorOnExist: false
  });
}

await writeFile(resolve(publicDir, ".gitkeep"), "\n");

console.log(`Synced ${staticEntries.length} static entries into app/public`);
