import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("adds negative numbers", () => {
    expect(add(-2, -3)).to.equal(-5);
  });
});
