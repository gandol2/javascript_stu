const products = [
  {
    제품명: "탐사수",
    가격: 500,
    무게: 25,
  },

  {
    제품명: "화장지",
    가격: 500,
    무게: 10,
  },

  {
    제품명: "모니터",
    가격: 100000,
    무게: 200,
  },

  {
    제품명: "마우스",
    가격: 12000,
    무게: 40,
  },
];

console.log(products);
const compare = (a, b) => {
  console.log("-----------");
  console.log(`A의 값 : ${JSON.stringify(a)}`);
  console.log(`B의 값 : ${JSON.stringify(b)}`);
  if (a.가격 < b.가격) {
    return -1;
  }

  if (a.가격 > b.가격) {
    return 1;
  }

  return 0;
};

// const months = ["!", "March", "Jan", "Feb", "Dec", "Apple", "apple", 10, "X10"];
// const sortResult = months.sort(compare);
// console.log(sortResult);

const sortResult2 = products.sort(compare);
console.log(sortResult2);
