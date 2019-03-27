$(document).ready(function(){
    
    
    //toggle
    $('#toggle').click(function(){
      $('.menu').stop().slideToggle();
    });


    $('a[data-toggle]').click(function(){


      $('a[data-toggle]').removeClass('active');

      if( $(this).parents() === $('.slick-slide.slick-current.slick-active') ) {

        $(this).addClass('active');

        console.log('it is working');

      }

    });

    //tab slider
    $('.tab-slider').slick({
      
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
            
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
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]

    });

      //project slider
      $('.project-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000
      });
      
      //project slider
      $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        infinite: true,
        cssEase: 'linear',
        speed:1000,
        vertical:true,
        autoplay:true,
        autoplaySpeed:2000,
        rows:2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical:false,
              rows:1
            }
          }
          
        ]
      });
      

      // rellax
      var rellax = new Rellax('.star', {
        // center: true
        callback: function(position) {
            // callback every position change
            console.log(position);
        }
      });


});
//document end




//Affix property

var toggleAffix = function(affixElement, wrapper, scrollElement) {

  var height = affixElement.outerHeight(),
      top = wrapper.offset().top;

  if (scrollElement.scrollTop() >= top){
      wrapper.height(height);
      affixElement.addClass("affix");
  }
  else {
      affixElement.removeClass("affix");
      wrapper.height('auto');
  }

};


$('[data-toggle="affix"]').each(function() {
  var ele = $(this),
      wrapper = $('<div></div>');

  ele.before(wrapper);
  $(window).on('scroll resize', function() {
      toggleAffix(ele, wrapper, $(this));
  });

  // init
  toggleAffix(ele, wrapper, $(window));
});