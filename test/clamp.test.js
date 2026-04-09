import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp (implementation-specific behavior)", () => {
  it("returns minimum value when input is inside range", () => {
    expect(clamp(5, 1, 10)).to.equal(1);
  });
});