import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A queue is a caterpillar made of people, shuffling forward one wiggle at a time while everyone waits for the head to reach the front.\nIt maps how each person moves only when the person ahead moves and nobody overtakes, but leaves out that people can step out, chat, or join another line, which a caterpillar's segments never do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
