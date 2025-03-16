$(document).ready(function(){
    $(".text-container").hide().fadeIn(2000); 
  });


$(document).ready(function(){
    $(".ans").hide();

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $(" .ans").fadeIn(2000);  
        }
    });
});


  
  