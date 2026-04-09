import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide", () => {
  it("divides two numbers", () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it("returns Infinity when divided by zero", () => {
    expect(divide(10, 0)).to.equal(Infinity);
  });

  it("returns NaN when both arguments are zero", () => {
    expect(Number.isNaN(divide(0, 0))).to.equal(true);
  });

  it("handles negative numbers", () => {
    expect(divide(-10, 2)).to.equal(-5);
  });
});