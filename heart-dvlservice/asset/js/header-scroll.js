document.addEventListener('scroll', function(){
    let scroll = document.body.scrollTop
    if (scroll > 48) {
        document.querySelector('.PC-Header').classList.add('Fix');
        document.querySelector('.PC-Header_dummy').classList.remove('display-none');
    }

    else {
        document.querySelector('.PC-Header').classList.remove('Fix');
        document.querySelector('.PC-Header_dummy').classList.add('display-none');
    } 
});