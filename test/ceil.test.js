import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil (implementation-specific behavior)", () => {
  it("handles positive decimal input", () => {
    expect(ceil(4.2)).to.equal(5);
  });

  it("handles precision argument", () => {
    expect(ceil(4.006, 2)).to.equal(4.01);
  });

  it("handles negative decimal input", () => {
    expect(ceil(-4.2)).to.equal(-4);
  });
});