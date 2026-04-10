import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq (implementation-specific behavior)", () => {
  it("handles equal primitive values", () => {
    expect(eq(1, 1)).to.equal(true);
  });

  it("handles number and string comparison", () => {
    expect(eq(1, "1")).to.equal(true);
  });

  it("handles NaN comparison", () => {
    expect(eq(NaN, NaN)).to.equal(true);
  });
});
