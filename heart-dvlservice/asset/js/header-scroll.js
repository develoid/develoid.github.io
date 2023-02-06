document.addEventListener('scroll', function(){
    let scroll = document.body.scrollTop
    if (scroll > 16) {
        document.querySelector('.PC-Header').classList.add('Fix');
    }
    else {
        document.querySelector('.PC-Header').classList.remove('Fix');
    } 
});