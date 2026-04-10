import { expect } from "chai";
import words from "../src/words.js";

describe("words (implementation-specific behavior)", () => {
  it("handles comma-separated sentence", () => {
    expect(words("fred, barney, & pebbles")).to.deep.equal([
      "fred",
      "barney",
      "pebbles"
    ]);
  });

  it("handles simple two-word string", () => {
    expect(words("hello world")).to.deep.equal(["hello", "world"]);
  });

  it("handles empty string", () => {
    expect(words("")).to.deep.equal([]);
  });
});
