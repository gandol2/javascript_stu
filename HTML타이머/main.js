// setTimeout(() => console.log("1초"), 1 * 1000);

// let count = 0;
// const timerId = setInterval(() => {
//   console.log(`1초마다 ${count}번째`);
//   count++;
// }, 1 * 1000);

// console.log(`타이머의 ID : ${timerId}`);

let 시 = 16;
let 분 = 30;
let 초 = 0;

const timerId = setInterval(() => {
  // console.log(`${시}:${분}:${초}`);
  // console.log(
  //   `${시.toString().padStart(2, "0")}:${분.toString().padStart(2, "0")}:${초
  //     .toString()
  //     .padStart(2, "0")}`
  // );
  초++;

  /*
  document.getElementsByTagName("span")[0].innerText = 시;
  document.getElementsByTagName("span")[2].innerText = 분;
  document.getElementsByTagName("span")[4].innerText = 초;
  */

  /*
  document.getElementById("hour").innerText = 시;
  document.getElementById("min").innerText = 분;
  document.getElementById("sec").innerText = 초;
  */

  document.querySelector(".hour").innerText = 시;
  document.querySelector(".min").innerText = 분;
  document.querySelector(".sec").innerText = 초;

  // if (초 % 10 === 0) {
  //   if (confirm("정지할까요?")) {
  //     console.log("타이머가 정지 되었습니다.");
  //     clearInterval(timerId);
  //     return;
  //   } else {
  //     console.log("취소 되었습니다");
  //   }
  // }

  if (60 <= 초) {
    초 = 0;
    분++;
    if (60 < 분) {
      분 = 0;
      시++;
    }
  }
}, 1000);

// setTimeout(() => clearInterval(timerId), 1200);
