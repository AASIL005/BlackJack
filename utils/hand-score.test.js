const test = require("node:test");
const assert = require("node:assert/strict");
const { getHandValue, isBust } = require("./hand-score");

test("counts face cards as ten", () => {
  assert.equal(getHandValue(["K", "Q"]), 20);
});

test("uses an ace as eleven when possible", () => {
  assert.equal(getHandValue(["A", "7"]), 18);
});

test("reduces an ace to one when the hand would bust", () => {
  assert.equal(getHandValue(["A", "9", "5"]), 15);
});

test("handles more than one ace", () => {
  assert.equal(getHandValue(["A", "A", "9"]), 21);
});

test("accepts card objects", () => {
  assert.equal(getHandValue([{ rank: "8" }, { rank: "A" }]), 19);
});

test("reports a bust", () => {
  assert.equal(isBust(["K", "8", "5"]), true);
});

test("rejects an unknown card rank", () => {
  assert.throws(() => getHandValue(["Joker"]), TypeError);
});
