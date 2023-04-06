// early return

// before
const withIf = ({ conditionA, conditionB }) => {
  if (conditionA) {
    if (conditionB) return "valueA";
    return "valueB";
  }
  return "valueC";
};

// after (조금 더 간결하게 작성할 수 있다.)
const withIf2 = ({ conditionA, conditionB }) => {
  if (!conditionA) return "valueC";
  if (conditionB) return "valueA";
  return "valueB";
};

// after2 (삼항연산자를 사용하여 이런식으로 작성할 수도 있다.)
const withIf3 = ({ conditionA, conditionB }) => {
  return !conditionA ? "valueC" : conditionB ? "valueA" : "valueB";
};
