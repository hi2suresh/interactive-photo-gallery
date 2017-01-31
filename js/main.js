//use strict;

$('#search-input').on('input', function(e) {
    var inputValue = $(this).val().toLocaleLowerCase();
   $('.gallery li').filter(function(){
       //Show the images only if the caption contains input value.
       if($(this).children('a').attr('title').toLowerCase().includes(inputValue)){         
          $(this).css('display','');           
          }
       else{
            $(this).css('display','none');
       }
   });
});