window.addEventListener('scroll', function(e){
    let scroll = document.documentElement.scrollTop;
    if (scroll > 24) {
        document.querySelector('.PC-Header').classList.add('Fix');
        document.querySelector('.PC-Header_dummy').classList.add('on');
    }

    else {
        document.querySelector('.PC-Header').classList.remove('Fix');
        document.querySelector('.PC-Header_dummy').classList.remove('on');
    } 
});