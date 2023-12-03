
		$(document).ready(function(){
			$("#open").click(function () {
				$(".mypost").toggle(); // 이미지 업로드 폼을 열거나 닫음
			});
		
			$("#close").click(function () {
				$(".mypost").hide(); // 이미지 업로드 폼을 숨김
			});


			  $('#randomButton').on('click', function(e) {
				let responseContainer = $("#img-container");	// 결과창을 저장하기 위한 컨테이너

				e.preventDefault();
        		responseContainer.empty(); 

				
				let perPage = 1;
				let orientation = 'landscape';

				let url = 'https://api.unsplash.com/photos/random/?client_id=Ypo4TFbTd4iHDksg9sNx7CyyPNF7f4fly2xQ_orZb7o&count=' + perPage + '&orientation=' + orientation;
				
					
			    // API 요청 보내기
			    $.ajax({
			      method: 'GET',
				  url : url,
			      data: {
			        per_page: perPage, // 페이지당 항목 수 설정
			        orientation: orientation // 사진 방향 설정

			      },
			      success: (data) => {
					console.log(data);
					data.forEach((element) => {
						// element 객체에서 올바른 속성에 접근
						const imageUrl = element.urls.regular;
		
						// 이미지 요소를 만들고 초기에는 숨겨두기
						const $img = $(`<img src=${imageUrl} class="my-2 mx-10">`).hide();
						$img.fadeIn(1000);
		
						// 이미지를 #img-container에 추가한 후 fadeIn() 함수로 나타나게 합니다.
						$("#img-container").append($img);
					});
				},
			});
		});
	})



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