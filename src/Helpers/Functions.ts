import { Lines } from "./Types";

export function processLines(input: Lines) {
    const words = input.map((i) => i.words);
    const unique = new Set<string>();
    words
      .join(" ")
      .split(" ")
      .forEach((w) => {
        unique.add(w.replace(",", "").toLowerCase());
      });
  
    return { words, unique };
  }