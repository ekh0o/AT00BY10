import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith (implementation-specific behavior)", () => {
  it("handles matching last character", () => {
    expect(endsWith("hello", "o")).to.equal(true);
  });

  it("handles non-last single character", () => {
    expect(endsWith("hello", "l")).to.equal(false);
  });

  it("handles multi-character suffix", () => {
    expect(endsWith("hello", "lo")).to.equal(true);
  });
});