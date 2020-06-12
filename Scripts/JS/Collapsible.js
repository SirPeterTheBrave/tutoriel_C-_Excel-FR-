$(document).ready(function(){
    $(".collapse").on("hide.bs.collapse", function(){
        $(this).parent(".card").children(".card-link").find(".fas").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
    $(".collapse").on("show.bs.collapse", function(){
        $(this).parent(".card").children(".card-link").find(".fas").removeClass("fa-angle-down").addClass("fa-angle-up");
    });
  });