import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber (implementation-specific behavior)", () => {
  it("handles number input", () => {
    expect(toNumber(3.2)).to.equal(3.2);
  });

  it("handles numeric string input", () => {
    expect(toNumber("3.2")).to.equal(3.2);
  });

  it("handles binary-like string input", () => {
    expect(toNumber("0b1010")).to.equal(10);
  });

  it("handles null input", () => {
    expect(toNumber(null)).to.equal(0);
  });

  it("handles undefined input", () => {
    const result = toNumber(undefined);
    expect(Number.isNaN(result)).to.equal(true);
  });
});