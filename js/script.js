$(document).ready(function () {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

function checkMedia() {
    var img = new Image();
    $('.imghead').css({
        'width': $('.row').width()
    });
    img.onload = function () {
        $('.imgheader').css({
            'min-height': $('.imghead').height() + 'px'
        });
    };
    img.src = 'img/headerimage.png';

}

//Function to the css rule
function checkSize() {
    if ($(".RKheader").css("font-size") == "2em") {
        checkMedia();
    } else {
        checkMedia();
    }
}
