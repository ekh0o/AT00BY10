import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("splits array into chunks of given size", () => {
    const input = [1, 2, 3, 4, 5];
    const result = chunk(input, 2);

    expect(result).to.deep.equal([[1, 2], [3, 4], [5]]);
  });

  it("returns empty array when input array is empty", () => {
    const result = chunk([], 2);

    expect(result).to.deep.equal([]);
  });

  it("returns empty array when size is not positive", () => {
    const input = [1, 2, 3];

    expect(chunk(input, 0)).to.deep.equal([]);
    expect(chunk(input, -1)).to.deep.equal([]);
  });

  it("does not modify the original array", () => {
    const input = [1, 2, 3, 4];
    const copy = [...input];

    chunk(input, 2);

    expect(input).to.deep.equal(copy);
  });
});
