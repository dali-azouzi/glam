$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });

  
  $(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});



$.getJSON( "https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN", function(apiData){

  for (let i = 0; i < apiData.data.length; i++) {
    if( i==0){
      document.getElementById('cardInject').innerHTML+='<div class="carousel-item col-md-4 active"> <div class="card"> <img class="card-img-top" src="http://'+apiData.data[i].imagePath+'" alt="Card image cap"> <div class="card-body"> <hr class="hrCard"> <p class="card-text text-center font-weight-bold">'+apiData.data[i].label+'</p> <p class=" text-center font-weight-light remove-margin">'+apiData.data[i].description+'</p></div></div>';

    }
    document.getElementById('cardInject').innerHTML+='<div class="carousel-item col-md-4"> <div class="card"> <img class="card-img-top" src="http://'+apiData.data[i].imagePath+'" alt="Card image cap"> <div class="card-body"> <hr class="hrCard"> <p class="card-text text-center font-weight-bold">'+apiData.data[i].label+'</p> <p class=" text-center font-weight-light remove-margin">'+apiData.data[i].description+'</p></div></div>';

  
  }

})