document.addEventListener('DOMContentLoaded', function(){
    var t1 = document.querySelector('.cafekdvlbutton').addEventListener("click", function(e){
        if (
            document.querySelector('.menuwrap_dvl').classList.contains('on')
        )
        {
            //메뉴 닫힘
            document.querySelector('.menuwrap_dvl').classList.remove('on');

            //Page Scroll Lock 해제
            document.querySelector('#dimmed2').remove();
        }
        
        else {
            //메뉴 펼침
            document.querySelector('.menuwrap_dvl').classList.add('on');

            //Page Scroll Lock 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed2';
            document.body.append(div);

            //Page Scroll Lock 모바일 이벤트 차단
            document.querySelector('#dimmed2').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            //Page Scroll Lock 레이어 클릭 메뉴 닫기
            document.querySelector('#dimmed2').addEventListener('click', function(e){
                document.querySelector(".section_cancel_inwrap").click();
            });             
        }
    });

    var t2 = document.querySelector('.section_cancel_inwrap').addEventListener("click", function(e){
        if (
            document.querySelector('.menuwrap_dvl').classList.contains('on')
        )
        {
            document.querySelector('.menuwrap_dvl').classList.remove('on');
            document.querySelector('#dimmed2').remove();
        }
        
        else {
            document.querySelector('.menuwrap_dvl').classList.add('on');
            let div = document.createElement('div');
            div.id = 'dimmed2';
            document.body.append(div);
            document.querySelector('#dimmed2').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            document.querySelector('#dimmed2').addEventListener('click', function(e){
                document.querySelector(".section_cancel_inwrap").click();
            });             
        }
    });
});