import { expect } from "chai";
import drop from "../src/drop.js";

describe("drop (implementation-specific behavior)", () => {
  it("handles dropping one element", () => {
    expect(drop([1, 2, 3], 1)).to.deep.equal([2, 3]);
  });

  it("handles dropping two elements", () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it("handles dropping more than array length", () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it("handles empty array input", () => {
    expect(drop([], 1)).to.deep.equal([]);
  });
});
