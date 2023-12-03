// 이름 입력란 클릭시 이벤트
document.getElementById("userName").addEventListener("click", function() {
  const userNameInput = document.getElementById("userName");
  if (userNameInput.value.trim() === "") {
    userNameInput.placeholder = "이름을 입력해주세요";
  }
});

// 이메일 입력란 클릭시 이벤트
document.getElementById("userEmail").addEventListener("click", function() {
  const userEmailInput = document.getElementById("userEmail");
  if (userEmailInput.value.trim() === "") {
    userEmailInput.placeholder = "이메일을 입력해주세요";
  }
});

// 버튼 클릭 이벤트
document.getElementById("submitBtn").addEventListener("click", function(event) {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;

  if (userName.trim() === "" || userEmail.trim() === "") {
    alert("이름과 이메일을 입력해주세요.");
    event.preventDefault(); // 양식 제출을 막음
  } else {
    alert("로그인 성공!");
    // 이동할 페이지로 리다이렉션
    // window.location.href = "main.html";
  }
});

// 이름(input 요소)을 클릭하면 메시지를 표시하는 이벤트 리스너
document.getElementById("userName").addEventListener("click", function() {
  const userName = document.getElementById("userName").value;
  if (userName.trim() === "") {
    alert("이름을 입력해주세요.");
  }
});

// 이메일(input 요소)을 클릭하면 메시지를 표시하는 이벤트 리스너
document.getElementById("userEmail").addEventListener("click", function() {
  const userEmail = document.getElementById("userEmail").value;
  if (userEmail.trim() === "") {
    alert("이메일을 입력해주세요.");
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const searchImgLink = document.querySelector("a[href='/index/serch/main.html']");
  const randomImgLink = document.querySelector("a[href='/index/random/random.html']");

  searchImgLink.addEventListener("click", function(event) {
    alert("로그인을 하셔야 합니다!"); // 경고 메시지 표시
    event.preventDefault(); // 링크 클릭을 중단합니다.
    // 여기에 로그인 페이지로 이동하는 코드를 추가하세요 (예: window.location.href = '/index.html';)
  });

  randomImgLink.addEventListener("click", function(event) {
    alert("로그인을 하셔야 합니다!");
    event.preventDefault(); // 링크 클릭을 중단합니다.
    // 여기에 랜덤 이미지 페이지로 이동하는 코드를 추가하세요 (예: window.location.href = '/index/random/random.html';)
  });
});



let typingIdx = 0;
let typingTxt = "What's your favorite Image?";
let currentText = "";

function typing() {
  if (typingIdx < typingTxt.length) {
    currentText += typingTxt[typingIdx];
    $(".typing").text(currentText);
    typingIdx++;
  } else {

    clearInterval(tyInt);

   
    setTimeout(function () {
      typingIdx = 0;
      currentText = "";
      tyInt = setInterval(typing, 150);
    }, 5000);
  }
}

let tyInt = setInterval(typing, 150);