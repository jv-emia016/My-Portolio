// scroll 

$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 100) {
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header')
  }
});

$(document).ready(function() {

  // Typing Animation
  new Typed('#type-it', {
    strings: ['Developer', 'Freelancer', 'Photographer', 'Videographer',],
    typeSpeed: 100,
    loop: true,
    backSpeed : 80,
    backDelay : 2000,

  });

  // One Page Scroll
  $.scrollIt({           
    easing: 'linear',      // the easing function for animation
    scrollTime: 100,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    topOffset: -50,          // offste (in px) for fixed top navigation
  });

});


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1300,
  reset: true     
})

/* -- HOME -- */
sr.reveal('.name-card',{})
sr.reveal('.job-card',{delay: 50})
sr.reveal('.location-card', {delay: 100})
sr.reveal('.about-btn', {delay: 150})
sr.reveal('.btn-cv', {delay: 200})
sr.reveal('.home-image',{delay: 250})

/* -- Services -- */

sr.reveal('.services-heading',{})

/* -- Skills-- */

sr.reveal('.skills-heading',{})

/* -- Portfolio -- */

sr.reveal('.portfolio-heading',{})

sr.reveal('.port-img-1',{delay: 50})
sr.reveal('.port-img-2', {delay: 100})
sr.reveal('.port-img-3', {delay: 150})


const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1300,
  reset: true
})

/* -- About -- */

srLeft.reveal('.about-img',{delay: 50})

/* -- Services -- */

srLeft.reveal('.web-design',{delay: 50})
srLeft.reveal('.photo-coverage',{delay: 100})
srLeft.reveal('.tech-support',{delay: 150})

/* -- Port -- */

srLeft.reveal('.port-main-2',{delay: 50})
srLeft.reveal('.port-sub-2',{delay: 100})
srLeft.reveal('.port-text-2',{delay: 150})
srLeft.reveal('.port-btn-2',{delay: 200})


/* -- Socials -- */

srLeft.reveal('.bxl-facebook-square',{delay: 50})
srLeft.reveal('.bxl-instagram-alt',{delay: 100})
srLeft.reveal('.bxl-linkedin-square',{delay: 150})
srLeft.reveal('.bxl-twitter',{delay: 200})
srLeft.reveal('.bxl-pinterest',{delay: 250})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1300,
  reset: true
})

/* -- About -- */

srRight.reveal('.about-text',{delay: 100})

/* -- Services -- */

srRight.reveal('.web-development',{delay: 50})
srRight.reveal('.video-coverage',{delay: 100})
srRight.reveal('.virtual-assistant',{delay: 150})


/* -- Port -- */

srRight.reveal('.port-main-1',{delay: 50})
srRight.reveal('.port-sub-1',{delay: 100})
srRight.reveal('.port-text-1',{delay: 150})
srRight.reveal('.port-btn-1',{delay: 200})

srRight.reveal('.port-main-3',{delay: 50})
srRight.reveal('.port-sub-3',{delay: 100})
srRight.reveal('.port-text-3',{delay: 150})
srRight.reveal('.port-btn-3',{delay: 200})

/* -- Copyright -- */

srRight.reveal('.copyright',{delay: 50})


const srBottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 1300,
  reset: true
})

/* -- Skills-- */

srBottom.reveal('.skill-img',{})

srBottom.reveal('.skill-bg-1',{delay: 50})
srBottom.reveal('.skill-bg-2',{delay: 100})
srBottom.reveal('.skill-bg-3',{delay: 150})
srBottom.reveal('.skill-bg-4',{delay: 200})
srBottom.reveal('.skill-bg-5',{delay: 250})
srBottom.reveal('.skill-bg-6',{delay: 300})
srBottom.reveal('.skill-bg-7',{delay: 350})
srBottom.reveal('.skill-bg-8',{delay: 400})
srBottom.reveal('.skill-bg-9',{delay: 450})
srBottom.reveal('.skill-bg-10',{delay: 500})

/* -- Contact-- */

srBottom.reveal('.contact-form',{delay: 50})
srBottom.reveal('.phone-tile',{delay: 100})
srBottom.reveal('.email-tile',{delay: 150})
srBottom.reveal('.address-tile',{delay: 200})