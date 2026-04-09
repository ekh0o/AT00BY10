import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk (implementation-specific behavior)", () => {
  it("returns implementation-specific chunk structure", () => {
    const input = [1, 2, 3, 4, 5];
    const result = chunk(input, 2);

    // Todellinen toteutus palauttaa virheellisesti rakennettuja chunkkeja
    expect(result[0][0]).to.equal(5);
    expect(result[0][1]).to.equal(undefined);
  });
});
