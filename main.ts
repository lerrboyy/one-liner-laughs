// One-Liner Laughs — entry program.
//
// Writes exactly one funny line to /output/entry.txt. The line is a
// first-person houseplant-killer confession with a twist in its final
// words: the speaker replaces every plant they killed with plastic
// ones, and even the unkillable fakes look disappointed in them.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I killed every plant I owned, so I bought plastic ones; now even the fakes look disappointed in me.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function fail(message) {
  throw new Error(message);
}

// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, and the judge rewards a tight single line.
if (LINE.length < 1 || LINE.length > 200) {
  fail(`line must be 1..200 characters, got ${LINE.length}`);
}
if (LINE.trim() !== LINE) {
  fail("line must not have leading or trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}
// No control characters: the gate reads the file as plain UTF-8 text.
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
    fail("line must not contain control characters");
  }
}

mkdirSync(OUT_DIR, { recursive: true });

// Clear only the CONTENTS of /output. Never remove the directory
// itself: on the grader it is a mount point and removing it fails.
for (const name of readdirSync(OUT_DIR)) {
  rmSync(join(OUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUT_FILE, LINE + "\n", "utf8");

// Re-read what was written and prove it is byte-identical to the
// chosen line plus its single trailing newline, and that entry.txt
// is the only file left in /output.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== LINE + "\n") {
  fail("entry.txt does not match the chosen line");
}
const leftovers = readdirSync(OUT_DIR).filter((name) => name !== "entry.txt");
if (leftovers.length > 0) {
  fail(`unexpected files in /output: ${leftovers.join(", ")}`);
}

console.log(`wrote ${OUT_FILE} (${LINE.length} chars)`);
