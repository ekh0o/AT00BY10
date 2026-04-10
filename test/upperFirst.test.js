import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst (implementation-specific behavior)", () => {
  it("handles sentence input", () => {
    expect(upperFirst("hello world")).to.equal("Hello world");
  });

  it("handles one-character input", () => {
    expect(upperFirst("h")).to.equal("H");
  });
});