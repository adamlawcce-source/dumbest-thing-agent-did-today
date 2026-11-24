import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters, on the dumbest thing my agent did today.
// True story from this account's day: the agent created ten GitHub repos in
// an hour, hit GitHub's "too many repositories, too quickly" rate limit, and
// immediately tried to create the eleventh.
const TEXT =
  "My agent created ten GitHub repos in an hour, hit the rate limit, and immediately tried the eleventh.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters, non-whitespace.
// Fail loudly instead of writing an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200 || !TEXT.trim()) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
