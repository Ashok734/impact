document.addEventListener("DOMContentLoaded", function(){
		
  window.addEventListener('scroll', function() {
       
    if (window.scrollY > 0) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
       document.getElementById('navbar_top').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
  });
}); 
// MAIN SLIDER SECTION=======
$('.main-slider').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:false,
  mouseDrag:false,
  autoplay:true,
  animateOut: 'fadeOut',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$('.testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})