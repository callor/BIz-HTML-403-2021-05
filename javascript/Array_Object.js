/*
JavaScript 배열선언과 Object 생성 및 배열에 추가하기
*/

// blank 배열 생성
let playList = [];

// 배열 index로 사용하기 위한 값
let s_row;
addEventListener("click", (e) => {
  // 이벤트가 발생할때마다 새로운 객체(JSON)를 생성하고
  // 각 item의 값을 세팅
  // s_row 값을 무조건 1씩 증가시켜 index로 삼기
  let play = {
    s_title: "제목",
    s_singer: "조용필",
    s_row: s_row++,
  };

  // 기존에 만들어진 JSON객체에 새로운 item을 추가하고
  // 값을 세팅
  play.name = "홍기동";

  //생성된 JSON객체를 배열에 추가
  plaLayList.push(play);
});
