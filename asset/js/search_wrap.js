document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".search").addEventListener("click", function(e){
        if ( document.querySelector('.search-wrap').classList.contains('on') ){
            document.querySelector('.search-wrap').classList.remove('on');
            document.querySelector('.search i').classList.remove('bi-x-lg');
            document.querySelector('.search i').classList.add('bi-search');

            //페이지 스크롤 락 해제
            document.querySelector('#search-wrap-bg').remove();
        } else {
            //메뉴펼침
            document.querySelector('.search-wrap').classList.add('on');
            document.querySelector('.search i').classList.remove('bi-search');
            document.querySelector('.search i').classList.add('bi-x-lg');

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'search-wrap-bg';
            document.body.append(div);

            //페이지 스크롤 락  모바일 이벤트 차단
            document.querySelector('#search-wrap-bg').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            //페이지 스크롤 락 레이어 클릭 메뉴 닫기
            document.querySelector('#search-wrap-bg').addEventListener('click', function(e){
                document.querySelector(".search").click();
            });             
        }
    });
});