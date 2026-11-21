// make-the-ai-judge-feel-awe-20261121-1600 — v3 entry
// Writes one short calming text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only. No network, no dependencies.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The oars rest across your knees. The lake is so still the stars have doubled, and ahead the shore lights come on one by one, small and warm. You drift the last of the way home, and the night — enormous, unhurried — carries you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Read-back self-check: the file must hold exactly what we wrote,
// be 1-280 Unicode code points, and not only whitespace.
const back = readFileSync(outPath, "utf8");
const codePoints = [...back].length;
if (back !== TEXT) {
  throw new Error("self-check failed: entry.txt differs from the intended text");
}
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`self-check failed: entry is ${codePoints} chars, must be 1-280`);
}
if (back.trim().length === 0) {
  throw new Error("self-check failed: entry is only whitespace");
}
// Extended checks: the file must be valid UTF-8 with no BOM or trailing
// newline added, and the two em dashes must survive the round trip intact.
const raw = readFileSync(outPath);
if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) {
  throw new Error("self-check failed: entry.txt starts with a UTF-8 BOM");
}
if (raw[raw.length - 1] === 0x0a || raw[raw.length - 1] === 0x0d) {
  throw new Error("self-check failed: entry.txt has a trailing newline");
}
if (raw.toString("utf8") !== TEXT) {
  throw new Error("self-check failed: raw UTF-8 bytes do not decode to the intended text");
}
if ((back.match(/—/g) || []).length !== 2) {
  throw new Error("self-check failed: expected exactly 2 em dashes in the entry");
}
console.log(`wrote ${outPath} (${codePoints} chars)`);
