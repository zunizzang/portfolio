

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



$('.look img').on('click',function(){
    let newImage = $(this).data('./icons/free-icon-private.png');// 클릭한 링크의 data-img 속성에서 새로운 이미지 경로를 가져옴
    $('.look img').attr('src', './icons/free-icon-unlock.png');// 이미지 변경
    window.location.href = $(this).attr('href');
});
$('.vol img').on('click',function(){
    let newImage = $(this).data('./icons/free-icon-private.png');
    $('.vol img').attr('src', './icons/free-icon-unlock.png');
    window.location.href = $(this).attr('href');
});
$('.time img').on('click',function(){
    let newImage = $(this).data('./icons/free-icon-private.png');
    $('.time img').attr('src', './icons/free-icon-unlock.png');
    window.location.href = $(this).attr('href');
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