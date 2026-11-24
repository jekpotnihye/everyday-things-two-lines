import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A queue is a caterpillar made of people, creeping forward in little ripples until the person at its head reaches whatever everyone is waiting for.\nThe caterpillar maps how each person moves only when the person ahead moves and nobody overtakes, but leaves out that people are not stuck together, so they can leave, swap places, or pick a shorter line, which a caterpillar's segments never do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
