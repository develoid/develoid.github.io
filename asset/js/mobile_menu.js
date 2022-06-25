document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".mobile-menu").addEventListener("click", function(e){
        if ( document.querySelector('.menuwrap').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.menuwrap').classList.remove('on');
            document.querySelector('.mobile-menu i').classList.remove('fa-times');
            document.querySelector('.mobile-menu i').classList.add('fa-bars');

            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
        } else {
            //메뉴펼침
            document.querySelector('.menuwrap').classList.add('on');
            document.querySelector('.mobile-menu i').classList.remove('fa-bars');
            document.querySelector('.mobile-menu i').classList.add('fa-times');

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);

            //페이지 스크롤 락  모바일 이벤트 차단
            document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            //페이지 스크롤 락 레이어 클릭 메뉴 닫기
            document.querySelector('#dimmed').addEventListener('click', function(e){
                document.querySelector(".mobile-menu").click();
            });             

        }
    });
});