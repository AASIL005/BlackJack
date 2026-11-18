function getHandValue(cards) {
  let total = 0;
  let aces = 0;

  for (const card of cards) {
    const rank = typeof card === "string" ? card : card.rank;

    if (rank === "A") {
      total += 11;
      aces += 1;
    } else if (["K", "Q", "J"].includes(rank)) {
      total += 10;
    } else {
      const value = Number(rank);

      if (!Number.isInteger(value) || value < 2 || value > 10) {
        throw new TypeError(`Invalid card rank: ${rank}`);
      }

      total += value;
    }
  }

  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }

  return total;
}

function isBust(cards) {
  return getHandValue(cards) > 21;
}

module.exports = { getHandValue, isBust };
