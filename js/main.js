/*=============================================================
jQuery Script to search and list images based on image caption
==============================================================*/

$('#search-input').on('input', function (e) {
    var inputValue = $(this).val().toLocaleLowerCase();
    var imageTitle = '';
    var alignLeftCounter = 0;
    $('.gallery li').filter(function () {
        //Get the image title or caption
        imageTitle = $(this).children('a').attr('title').toLowerCase();
        //Show the images only if the caption includes input value.
        if (imageTitle.includes(inputValue)) {
            $(this).css('display', '');
            alignLeftCounter++;
        }
        else {
            $(this).css('display', 'none');
        }
    });
    
    //Align the images left or towards center
    if (alignLeftCounter % 4 !== 0 && alignLeftCounter > 4) {
        $('.gallery').css('text-align', 'left');
    }
    else {
        $('.gallery').css('text-align', 'center');
    }
    
});