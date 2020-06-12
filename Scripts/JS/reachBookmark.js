$(document).ready(function(){
        if (window.location.hash) {
            var id = window.location.hash;
            $(id).collapse('show')
            $(id).parents('.collapse').collapse('show');
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 1000);
          }
          document.getElementsByTagName("BODY")[0].onhashchange = function() {myFunction()};

 });

 function myFunction() {
            if (window.location.hash) {
            var id = window.location.hash;
            $(id).collapse('show')
            $(id).parents('.collapse').collapse('show');
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 1000);
          }
  }