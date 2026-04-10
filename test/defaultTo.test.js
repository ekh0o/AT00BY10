import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo (implementation-specific behavior)", () => {
  it("handles undefined input", () => {
    expect(defaultTo(undefined, "x")).to.equal("x");
  });

  it("handles null input", () => {
    expect(defaultTo(null, "x")).to.equal("x");
  });

  it("handles normal defined value", () => {
    expect(defaultTo(5, "x")).to.equal(5);
  });
});