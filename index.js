

    const text = '성장하는 디자이너 엄주은입니다.'; // 타이핑할 텍스트
    const typingText = document.getElementById('typing-text');

    // 텍스트를 바로 보여주기
    function showText() {
        typingText.innerHTML = text;
    }

    // 초기화 및 텍스트 표시
    setTimeout(showText, 500); // 500ms 후에 텍스트 표시


    
    
$(document).ready(function() {
    $('.BTN button').on('click', function() {
        $('#main-wrap').fadeOut(300, function() {
            $('#maincontainer').fadeIn(300);
         });
    });
});





$(document).ready(function() {
    $('.close-btn').on('click', function() {
         $('html, body').animate({
            scrollTop: $('.bye').offset().top // .bye 위치로 스크롤 이동
        }, 300); 
    });
});

// 모든 a 요소를 선택
const links = document.querySelectorAll('#bye-logo a');

// 각 링크에 클릭 이벤트 추가
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // 기본 링크 클릭 동작 방지
        event.preventDefault();

        // 모든 li에서 'clicked' 클래스 제거
        document.querySelectorAll('.more ul li').forEach(item => {
            item.classList.remove('clicked');
        });

        // 클릭한 링크에 해당하는 li에 'clicked' 클래스 추가
        const className = link.className; // a의 클래스 이름 가져오기
        const correspondingLi = document.querySelector(`.${className}`);
        
        // 색상 즉시 변경
        correspondingLi.classList.add('clicked');

        // 새 페이지로 이동 (기존 링크 동작)
        window.open(link.href, '_blank');
    });
});














const popup = document.getElementById('popup');
const popupTrigger = document.getElementById('popupTrigger');

popupTrigger.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (popup.style.display === 'block') {
        popup.style.display = 'none'; 
    } else {
        popup.style.display = 'block'; 
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    popup.style.display = 'none'; 
});

// 배경 클릭 시 팝업 닫기
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}


