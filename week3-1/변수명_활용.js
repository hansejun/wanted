// Before
const isInRange = (range, targetNumber) => {
  return targetNumber >= range[0] && targetNumber <= range[1];
};

// After
const isInRange2 = (range, targetNumber) => {
  const [miminumPrice, maximumPrice] = range;
  return targetNumber >= miminumPrice && targetNumber <= maximumPrice;
};

// After2
const isInRange3 = ([miminumPrice, maximumPrice], targetNumber) => {
  return targetNumber >= miminumPrice && targetNumber <= maximumPrice;
};
