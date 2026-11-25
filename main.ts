import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot pickup line: the joke grows out of the machine's own nature.
// A robot that feels nothing is just code doing its job — until a human
// shows up and breaks that code. The setup promises cold logic, the
// punchline flips it: the human is the "bug" that made the robot feel.
// Two short sentences, no wasted words: the robot humbles itself
// while making the human the one exception to its programming.
const line = "I was programmed to feel nothing. You must be a bug.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error("Line must be 1-200 characters and not only whitespace.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
