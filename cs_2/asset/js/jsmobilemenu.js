document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".headrightcontent").addEventListener("click", function(e){
        if ( document.querySelector('.menuwrap').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.menuwrap').classList.remove('on');
            document.querySelector('.headrightcontent menu').classList.remove("../images/header_sources/menu_online.svg").src;
            document.querySelector('.headrightcontent menu').classList.add(src('../images/header_sources/menu_online.svg'));

            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
        } else {
            //메뉴펼침
            document.querySelector('.menuwrap').classList.add('on');
            document.querySelector('.headrightcontent svg').classList.remove("../images/header_sources/menu_offline.svg").src;
            document.querySelector('.headrightcontent svg').classList.add('../images/header_sources/menu_online.svg');

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
                document.querySelector(".headrightcontent").click();
            });             

        }
    });
});