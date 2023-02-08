document.querySelector(".Search-header").addEventListener("click", function(e){
    if ( document.querySelector('.search-wrap').classList.contains('on') ){
        document.querySelector('.search-wrap').classList.remove('on');
    }

    else {
        document.querySelector('.search-wrap').classList.add('on');
        document.querySelector('.div-search input').focus();
    }
});

document.querySelector(".sidebar-search").addEventListener("click", function(e){
    if ( document.querySelector('.search-wrap').classList.contains('on') ){
        document.querySelector('.search-wrap').classList.remove('on');
    }

    else {
        document.querySelector('.search-wrap').classList.add('on');
        document.querySelector('.div-search input').focus();
    }
});

document.querySelector(".search-cancel").addEventListener("click", function(e){
    if ( document.querySelector('.search-wrap').classList.contains('on') ){
        document.querySelector('.search-wrap').classList.remove('on');
    }

    else {
        document.querySelector('.search-wrap').classList.add('on');
        document.querySelector('.div-search input').focus();
    }
});

document.querySelector(".mobile-search").addEventListener("click", function(e){
    if ( document.querySelector('.search-wrap').classList.contains('on') ){
        document.querySelector('.search-wrap').classList.remove('on');
    }

    else {
        document.querySelector('.search-wrap').classList.add('on');
        document.querySelector('.div-search input').focus();
    }
});

/* document.querySelector(".TitleSearch").addEventListener("click", function(e){
    if ( document.querySelector('.search-wrap').classList.contains('on') ){
        document.querySelector('.search-wrap').classList.remove('on');
    }

    else {
        document.querySelector('.search-wrap').classList.add('on');
        document.querySelector('.div-search input').focus();
    }
}); */