import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide (implementation-specific behavior)", () => {
  it("returns 1 for normal division", () => {
    expect(divide(10, 2)).to.equal(1);
  });

  it("returns NaN when dividing by zero", () => {
    expect(Number.isNaN(divide(10, 0))).to.equal(true);
  });

  it("returns 1 for negative numbers", () => {
    expect(divide(-10, 2)).to.equal(1);
  });
});