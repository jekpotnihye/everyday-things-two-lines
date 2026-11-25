// Two lines for a 10-year-old: line 1 is one vivid sentence built on a
// single analogy (a queue as a caterpillar); line 2 says in one sentence
// what the analogy maps and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE1 =
  "A queue is a caterpillar of people, creeping forward in little ripples.";
const LINE2 =
  "The caterpillar maps moving only when the one ahead moves, but leaves out that people can leave, swap, or pick a shorter line.";
const ENTRY = `${LINE1}\n${LINE2}`;

if (ENTRY.length > 400) {
  throw new Error("Entry must be 1 to 400 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Output: exactly the two lines above, no trailing newline.
