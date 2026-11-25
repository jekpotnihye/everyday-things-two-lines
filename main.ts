// Everyday Things, Two Lines — a queue, explained with a caterpillar.
// This script builds the two-line entry and writes it to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Line 1: the everyday thing, in one vivid sentence built on an analogy.
const LINE1 =
  "A queue is a caterpillar of people, creeping forward in little ripples.";

// Line 2: what the analogy maps, and what it leaves out, in one sentence.
const LINE2 =
  "The caterpillar maps moving only when the one ahead moves, but leaves out that people can leave, swap, or pick a shorter line.";

// Join the two lines with a single newline; no trailing newline at the end.
const ENTRY = `${LINE1}\n${LINE2}`;

// Mirror the competition gate: the entry must fit in 400 characters.
if (ENTRY.length > 400) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 400 limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
