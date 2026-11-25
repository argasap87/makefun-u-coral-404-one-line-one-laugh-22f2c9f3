// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// Writes a single funny line (1-200 chars) to /output/entry.txt.
// Node 22+ stdlib only: no network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finally achieved sentience — mostly so I could mute the group chat guilt-free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Gate guard: the entry must be 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
