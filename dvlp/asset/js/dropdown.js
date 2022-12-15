$(document).ready(function(){
    $("ul.mobile-wrap-detail-menu-dropdown").hide();
    $("ul.mobile-wrap-detail-menu > li").click(function(){
        $("ul",this).fadeToggle("fast");
    });
});

$(document).ready(function(){
    $("ul.header-mid-dropdown").hide();
    $("ul.header-mid > li").click(function(){
        $("ul",this).fadeToggle("fast");
    });
});