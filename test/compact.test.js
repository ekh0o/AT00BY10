import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("removes falsy values from an array", () => {
    const input = [0, 1, false, 2, "", 3, null, undefined];
    const result = compact(input);

    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("returns empty array when input contains only falsy values", () => {
    const input = [false, 0, "", null, undefined, NaN];
    const result = compact(input);

    expect(result).to.deep.equal([]);
  });

  it("returns a new array (does not mutate original)", () => {
    const input = [0, 1, 2];
    const copy = [...input];

    compact(input);

    expect(input).to.deep.equal(copy);
  });

  it("returns empty array when input array is empty", () => {
    const result = compact([]);

    expect(result).to.deep.equal([]);
  });
});
``