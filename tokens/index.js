
import { readFile } from "fs/promises";
import Baobab from "baobab";

const rawTokens = await readFile("./tokens.json", { encoding: "utf-8" });

const tokens = new Baobab(JSON.parse(rawTokens));

