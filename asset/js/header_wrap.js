document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".mobile").addEventListener("click", function(e){
        if ( document.querySelector('.mobile-wrap').classList.contains('on') ){
            document.querySelector('.mobile-wrap').classList.remove('on');
            document.querySelector('.mobile i').classList.remove('bi-x-lg');
            document.querySelector('.mobile i').classList.add('bi-list');

            //페이지 스크롤 락 해제
            document.querySelector('#mobile-wrap-bg').remove();
        } else {
            //메뉴펼침
            document.querySelector('.mobile-wrap').classList.add('on');
            document.querySelector('.mobile i').classList.remove('bi-list');
            document.querySelector('.mobile i').classList.add('bi-x-lg');

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'mobile-wrap-bg';
            document.body.append(div);

            //페이지 스크롤 락  모바일 이벤트 차단
            document.querySelector('#mobile-wrap-bg').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            //페이지 스크롤 락 레이어 클릭 메뉴 닫기
            document.querySelector('#mobile-wrap-bg').addEventListener('click', function(e){
                document.querySelector(".mobile").click();
            });             

        }
    });
});