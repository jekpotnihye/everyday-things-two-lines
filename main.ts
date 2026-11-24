import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A queue is a caterpillar of people, creeping forward in little ripples.\nThe caterpillar maps moving only when the one ahead moves, but leaves out that people can leave, swap, or pick a shorter line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
