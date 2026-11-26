import { mkdirSync, writeFileSync } from "node:fs";

// One funny forecast line for a city that does not exist.

const line = "Tomorrow in Flipside Falls: rain falls up, so hold your umbrella under your shoes and mind the puddles overhead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
