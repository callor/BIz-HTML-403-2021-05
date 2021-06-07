document.addEventListener("DOMContentLoaded", () => {
  // nav와 selection을 별도의 변수로 만들기
  const nav = document.querySelector("nav#main_nav");
  const conts = document.querySelector("section#contents");

  // 이벤트 핸들러 함수 선언
  const navClick = (e) => {
    let tagName = e.target.tagName;
    /*
    class="art1" 인 li tag를 클릭하면
    클래스 이름의 문자열 art1과 #을 결합하여
    #art1 문자열을 만들고

    querySelector()로 art1 id 가 설정된
    article box를 selector하고
    
    article box의 크기, 좌표 정보를 getter하고
    그 정보에서 top의 좌표만 추출

    window.scrollBy() 함수에 
            top은 article box의 top으로 설정
            left 화면 왼쪽 끝인 0으로 설정
            smooth 속성을 부여하여
            자연스럽게 화면이 스크롤 되도록 설정
    */
    if (tagName === "LI") {
      // art1 art2 등등
      let className = e.target.className;

      // className art1 -> #art1 찾아서 선택
      let art = document.querySelector("#" + className);

      // art 객체(Dom 객체)의 현재 위치, 모양값을
      // getter 해달라
      let bound = art.getBoundingClientRect();

      // art 객체(box)의
      // 화면의 위에서부터 좌표값
      let artTop = bound.top;
      window.scrollBy({
        top: artTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  // nav에 click event 설정
  nav.addEventListener("click", navClick);
});
