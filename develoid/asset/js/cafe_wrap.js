document.addEventListener('DOMContentLoaded', function(){
    var t1 = document.querySelector('.mainbutton_tabletop').addEventListener("click", function(e){
        if (
            document.querySelector('.mail').classList.contains('on'),
            document.querySelector('.mainbutton_tabletop').classList.contains('on')
        )

        {
            document.querySelector('.mail').classList.remove('on'),
            document.querySelector('.mainbutton_tabletop').classList.remove('on')
        }
        
        else {
            document.querySelector('.mail').classList.add('on'),
            document.querySelector('.mainbutton_tabletop').classList.add('on')
        }
    });
});