import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp (implementation-specific behavior)", () => {
  it("returns -1 when value is inside range", () => {
    expect(clamp(5, 1, 10)).to.equal(-1);
  });

  it("returns 0 when value is below min", () => {
    expect(clamp(-5, 0, 10)).to.equal(0);
  });

  it("returns 0 when value is above max", () => {
    expect(clamp(20, 0, 10)).to.equal(0);
  });
});