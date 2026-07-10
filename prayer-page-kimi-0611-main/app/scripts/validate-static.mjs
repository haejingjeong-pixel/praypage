import { access } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { staticEntries } from "../src/static-manifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");
const missing = [];

for (const entry of staticEntries) {
  try {
    await access(resolve(publicDir, entry));
  } catch (error) {
    missing.push(entry);
  }
}

if (missing.length) {
  console.error("Missing required public assets:");
  missing.forEach((entry) => console.error(`- ${entry}`));
  process.exit(1);
}

console.log(`Validated ${staticEntries.length} static entries in app/public`);
