import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact (implementation-specific behavior)", () => {
  it("returns array with unexpected structure", () => {
    const input = [0, 1, false, 2, "", 3];
    const result = compact(input);

    expect(result.includes(2)).to.equal(true);
    expect(result.includes(3)).to.equal(true);
  });
});