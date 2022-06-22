(function() {

	var shrink = 300;
    (window).scroll(function(){
    	var scroll = getCurrentScroll();
        if(scroll >= shrink){
        	('.header').addClass('shrink');
          ('.leftcontent').addClass('shrink');
          ('.centercontent').addClass('shrink');
          ('.rightcontent').addClass('shrink');
        }else{
        	('.header').removeClass('shrink');
          ('.leftcontent').removeClass('shrink');
          ('.centercontent').removeClass('shrink');
          ('.rightcontent').removeClass('shrink');
        }
    });
    
    function getCurrentScroll(){
    	return window.pageYOffset || document.documentElement.scrollTop;
    }

})();