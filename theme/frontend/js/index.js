$(document).ready(function(){
    $('#pr_select1').select2({    
});
});

$('#pr_select1').one('select2:open', function(e) {
    $('input.select2-search__field').prop('placeholder', 'Tìm kiếm sản phẩm');
});

$(document).ready(function(){
    $('#pr_select2').select2({
});
});

$('#pr_select2').one('select2:open', function(e) {
    $('input.select2-search__field').prop('placeholder', 'Tìm kiếm mệnh giá');
});

$(document).ready(function(){
    $('#pr_select3').select2({
        
});
});
$(document).ready(function() {
    $("pr_select3").select2({minimumResultsForSearch: -1});
    });

// 
$('.slide__home').slick({
    dots: false,
    infinite: true,
    speed: 200,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    nextArrow: '.bn-next',
    prevArrow: '.bn-prev',
});
// 
$('.slide_pr').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '.bn-next_pr',
   
    responsive: [{
        
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
        
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.list_slider_product').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
     
    ]
  });

$('.feature__slide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1280,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            prevArrow: false,
            nextArrow: false
        }
    },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
       
    ]
});
// share
$('.share_slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false
            }
        },
        {
        
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
       
    ]
});
$('.partner__slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
// fixed
window.onscroll = function() {myFunction()};

var header = document.getElementById("fix_top");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

// back to top
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.back-top').fadeIn();
    } else {
        $('.back-top').fadeOut();
    }
});
$(".back-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
});
// nav responsive

$(document).ready(function() {
    var menu = "close";
    $(".mobile-one .menu-toggle").click(function() {
        
        if (menu === "close") {
              $(this).parent().next(".mobile-nav").css("transform", "translate(0, 0)");
              menu = "open";
        } else {
              $(this).parent().next(".mobile-nav").css("transform", "translate(-100%, 0)");
              menu = "close";
        }
    });  
    });
 
    //load trang//
    $(window).on('load', function(event) {
        $('body').removeClass('preloading');
        
        $('.loader').delay(1000).fadeOut('fast');
    });