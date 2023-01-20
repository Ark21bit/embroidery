const swiperMain = new Swiper('.swiperMain', {
    // Optional parameters    
    loop: true,
    spaceBetween:32,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    
  });

const swiperSecond = new Swiper('.swiperSecond', {
    // Optional parameters 
    spaceBetween:20,
    slidesPerView:5,
    // If we need pagination   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    
  });

const swiperPrimary = new Swiper('.swiperPrimary', {
    // Optional parameters 
    spaceBetween:20,
    slidesPerView:4,
    // If we need pagination   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    
  });