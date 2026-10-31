// Copies the static export (web/out) to the repository root, which GitHub Pages serves.
// Replaces the previously published build; leaves the source folder and git metadata alone.
import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "..", "out");
const root = resolve(here, "..", "..");
const KEEP = new Set([".git", ".github", "web"]);

if (!existsSync(out)) throw new Error("No export found - run `next build` first.");

for (const entry of readdirSync(root)) {
  if (!KEEP.has(entry)) rmSync(join(root, entry), { recursive: true, force: true });
}
cpSync(out, root, { recursive: true });
console.log(`Published ${out} -> ${root}`);
