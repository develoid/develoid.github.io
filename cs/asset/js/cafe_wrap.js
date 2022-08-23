document.addEventListener('DOMContentLoaded', function(){
    var t1 = document.querySelector('.mbtn_ttop').addEventListener("click", function(e){
        if (
            document.querySelector('.mail').classList.contains('on'),
            document.querySelector('.mbtn_ttop').classList.contains('on')
        )

        {
            document.querySelector('.mail').classList.remove('on'),
            document.querySelector('.mbtn_ttop').classList.remove('on')
        }
        
        else {
            document.querySelector('.mail').classList.add('on'),
            document.querySelector('.mbtn_ttop').classList.add('on')
        }
    });
});