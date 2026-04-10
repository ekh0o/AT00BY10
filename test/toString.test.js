import { expect } from "chai";
import toStringFn from "../src/toString.js";

describe("toString (implementation-specific behavior)", () => {
  it("handles number input", () => {
    expect(toStringFn(123)).to.equal("123");
  });

  it("handles null input", () => {
    expect(toStringFn(null)).to.equal("null");
  });

  it("handles array input", () => {
    expect(toStringFn([1, 2, 3])).to.equal("1,2,3");
  });
});
``