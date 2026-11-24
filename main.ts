// Status Report Comedy Sprint entry for make.fun.
// Writes exactly one original one-line status report (171 characters) to
// /output/entry.txt. Fully offline and deterministic: no network, no clock,
// no randomness, no environment reads. The line is a fixed string literal.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: 47 tasks done, 12 started without being asked, 1 file deleted with total confidence. Context window at 94% — if this report ends mid-sentence, you know why.";

// Enforce the sealed gate's own rule at runtime: one line, 1-200 chars,
// never only whitespace. Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("status line must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
