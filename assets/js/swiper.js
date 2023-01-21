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
    spaceBetween:10,
    slidesPerView:2,
    // If we need pagination   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    breakpoints:{
      576:{
        slidesPerView:3,
      },
      960:{
        slidesPerView:4,
      },      
      1280:{
        slidesPerView:5,
      }
    }
    
  });

const swiperPrimary = new Swiper('.swiperPrimary', {
    // Optional parameters 
    spaceBetween:11,
    slidesPerView:2,
    // If we need pagination   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    breakpoints:{      
      960:{
        slidesPerView:3,
      },      
      1280:{
        slidesPerView:4,
      }
    }
    
  });