document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".header-more").addEventListener("click", function(e){
            //메뉴펼침
            document.querySelector('.mobile-wrap').classList.add('on');

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
                document.querySelector(".header-more").click();
            });             
    });

    document.querySelector(".wrap-close").addEventListener("click", function(e){
        if ( document.querySelector('.mobile-wrap').classList.contains('on') ){
            document.querySelector('.mobile-wrap').classList.remove('on');
            document.querySelector('#mobile-wrap-bg').remove();
        }
    });


    var cols = document.querySelectorAll(".header-search");
    [].forEach.call(cols, function(col) {
        col.addEventListener("click", function(e){
            document.querySelector('.search-wrap').classList.add('on');
            let div = document.createElement('div');
            div.id = 'search-wrap-bg';
            document.body.append(div);
            document.querySelector('#search-wrap-bg').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            document.querySelector('#search-wrap-bg').addEventListener('click', function(e){
                document.querySelector(".header-search").click();
            });         
        });
    });
});

    document.querySelector(".search-bar .back").addEventListener("click", function(e){
        if ( document.querySelector('.search-wrap').classList.contains('on') ){
            document.querySelector('.search-wrap').classList.remove('on');
            document.querySelector('#search-wrap-bg').remove();
        }
    });










    var cols = document.querySelectorAll(".theme-toggle");
    [].forEach.call(cols, function(col) {
        col.addEventListener("click", function(e){
            if ( document.querySelector('body').classList.contains('dark-mode') ){
                document.querySelector('body').classList.remove('dark-mode');
                col.classList.remove('iSun');
                col.classList.add('iMoon');

            } else {
                //메뉴펼침
                document.querySelector('body').classList.add('dark-mode');
                col.classList.remove('iMoon');
                col.classList.add('iSun');
            }
        });
    });