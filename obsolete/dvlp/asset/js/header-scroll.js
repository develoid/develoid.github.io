var lastScrollTop = 0;
 
$(window).scroll(function(){

    var _scrollTop = $(this).scrollTop(); //현재 스크롤값
    var _navHeight = $('header').height(); //Nav 높이값 
    
    if(_scrollTop >= 0) { 
        if ((_scrollTop > lastScrollTop) && (lastScrollTop>0)) { 
            $('header').addClass('off');
            $('.header-mid-dropdown').css({'display': 'none'});
        } else {
            $('header').removeClass('off');
        }
		lastScrollTop = _scrollTop;
    }

    var Top = $(document).scrollTop();

    if(Top <= 0) {
        $('header').css({'border-bottom': '1px solid transparent'});
    }
    else {
        $('header').css({'border-bottom': '1px solid var(--bs-box-border-color)'});
    }
    
});
