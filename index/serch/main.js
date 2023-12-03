$(document).ready(() => {
    $("#search-form").submit((e) => {
        const perPage =20; // 예: 20개의 항목을 가져옴

        let searchText = $("#photo").val();
        let responseContainer = $("#img-thumbnail");	// 결과창을 저장하기 위한 컨테이너

        let userApi = `Ypo4TFbTd4iHDksg9sNx7CyyPNF7f4fly2xQ_orZb7o`
        let url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=${userApi}`;
        e.preventDefault();
        responseContainer.empty(); 

        $.ajax({
             method: 'GET',
             url : url,
             data: {
                  per_page: perPage, // 페이지당 항목 수 설정${searchField.val()}
             },
             success:(data) => {
                console.log(data);
                data.results.forEach((element) => {
                    // $("#img-thumbnail").append(`<img src=${element.urls.small} class="my-2">`)

                    // 이미지 요소를 만들고 초기에는 숨겨두기
                    const $img = $(`<img src=${element.urls.small} class="my-2 mx-10">`).hide();
                    $img.fadeIn(1000);

                    // 이미지를 #img-thumbnail에 추가한 후 fadeIn() 함수로 나타나게 합니다.
                    $("#img-thumbnail").append($img);
          
                
                })
          }  
      })
  })
})    // 제이쿼리와 연결 되었는지 잘 보여주기




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



// typingIdx 변수:

// 이 변수는 현재 텍스트에서 어떤 문자를 출력해야 하는지를 추적하기 위한 인덱스입니다. 처음에는 0으로 초기화됩니다.
// typingTxt 변수:

// 이 변수는 화면에 표시될 텍스트를 저장하는 문자열입니다. "What's your favorite Image?"라는 초기 텍스트로 설정되어 있습니다.
// currentText 변수:

// 이 변수는 화면에 현재까지 표시된 텍스트를 저장하는 문자열입니다. 처음에는 빈 문자열로 초기화됩니다.
// typing() 함수:

// 이 함수는 화면에 텍스트를 한 글자씩 추가로 출력하는 역할을 합니다.
// typingIdx가 typingTxt의 길이보다 작을 때 (즉, 아직 모든 텍스트를 표시하지 않았을 때) 실행됩니다.
// currentText에 typingTxt의 typingIdx 위치에 있는 글자를 추가하고, jQuery를 사용하여 클래스가 "typing"인 요소의 텍스트를 currentText로 설정합니다.
// 그런 다음 typingIdx를 증가시켜서 다음 글자를 처리할 준비를 합니다.
// 모든 텍스트를 표시했다면 setInterval을 종료하고, 5초 후에 다시 시작하도록 설정합니다.
// tyInt 변수:

// 이 변수는 setInterval 함수를 사용하여 typing() 함수를 주기적으로 호출하는 인터벌을 설정합니다. typing() 함수는 150밀리초마다 호출됩니다. 이렇게 함으로써 텍스트가 한 글자씩 출력되는 효과를 만듭니다.



// 방법 1
// const apiKey = 'Ypo4TFbTd4iHDksg9sNx7CyyPNF7f4fly2xQ_orZb7o';   // unsplash API 키
// const form = $("#search-form");	// "#search-form" ID사용자를 위한 입력폼
// const searchField = $("#search-keyword").val();   	// 검색쿼리를 저장하는 필드	검색 입력 필드
// const responseContainer = $("#img-thumbnail");	// 결과창을 저장하기 위한 컨테이너

// // -------------------- 매개변수로 보내주기 ---------------------

// // 페이지당 항목 수
// const perPage = 5; // 예: 20개의 항목을 가져옴

// // 사진 방향
// const orientation = 'portrait';


// form.on('submit', function (e) {
//   e.preventDefault();
//   responseContainer.empty();    // 결과를 초기화

//   const searchQuery = searchField.val();

//   $.ajax({
//           url: `https://api.unsplash.com/photos/random/?client_id=Ypo4TFbTd4iHDksg9sNx7CyyPNF7f4fly2xQ_orZb7o`,
//           method: 'GET',
//           data: {
//             per_page: perPage, // 페이지당 항목 수 설정${searchField.val()}
//             orientation: orientation // 사진 방향 설정
//           },
//           header: {
//             'Authorization': `Client-ID ${apiKey}`
//           },
//           success: function(data) {
//             let htmlContent = '';

//             if (response.results && response.results.length > 0) {
//               $.each(data.results, function(index, photo) {
//                 const imageUrl = photo.urls.regular;
//                 const imageElement = $('<img>').attr('src', imageUrl).attr('alt', 'Unsplash Image');
//                 const figure = $('<figure>').append(imageElement);
//                 const caption = $('<figcaption>').text(`Photo by ${photo.user.name}`);
//                 figure.append(caption);
//                 responseContainer.append(figure);
//               });
//             } else {
//               htmlContent = '<div class="error-no-image">No images available</div>';
//               responseContainer.html(htmlContent);
//             }
//           },
//           error: function(xhr, status, error) {
//             console.error('에러:', status, error);
//          }
//       });
//     });
// })



// 방법2
// 버튼 클릭 시 API 데이터 가져오기
// $(document).ready(function(){
//   $('#getDataButton').click(function() {
  
//     // API 요청 보내기
//     $.ajax({
//       url: `https://api.unsplash.com/search/photos/random/?client_id=${apiKey}`,
//       method: 'GET',
//       data: {
//         query: searchQuery,
//         per_page: perPage, // 페이지당 항목 수 설정
//         orientation: orientation // 사진 방향 설정

//       },
//       success: function(response) {
//         if (response.results && response.results.length > 0) {
//           let imageContainer = document.getElementById('img-thumbnail');
//           imageContainer.innerHTML = ''; // 이전 이미지를 지웁니다.
    
//           response.results.forEach(function(photo) {
//             if (photo.urls && photo.urls.thumb) {
//               let imageUrl = photo.urls.thumb;
//               let imageElement = document.createElement('img');
//               imageElement.src = imageUrl;
//               imageElement.alt = "Unsplash Image";
//               imageContainer.appendChild(imageElement);
//             }
//           });
//         } else {
//           console.log('검색 결과가 없습니다.');
//         }
//       }
//     ,error: function(xhr, status, error) {
//         console.error('에러:', status, error);
//     }
//   });
//   });
// });


// 버튼 클릭 시 API 데이터 가져오기
// $('#getDataButton').click(function() {
//   displayUnsplashImage();
//   });


// $(function(){
// alert("");
// });