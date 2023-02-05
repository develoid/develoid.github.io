let page2 = $("#page2");

$(document).ready(function() {
    page2.hide(0);
});

function OpenPage2() {
    page2.fadeIn();
}

function ClosePage2() {
    page2.fadeOut();
}