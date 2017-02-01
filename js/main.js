//Script uses jquery and hence to be run after loading jQuery

$('#search-input').on('input', function(e) {
    var inputValue = $(this).val().toLocaleLowerCase();
    var imageTitle = '';
   $('.gallery li').filter(function(){
       //Get the image title or caption
       imageTitle = $(this).children('a').attr('title').toLowerCase();
       //Show the images only if the caption includes input value.
       if(imageTitle.includes(inputValue)){         
          $(this).css('display','');           
          }
       else{
            $(this).css('display','none');
       }
   });    
});