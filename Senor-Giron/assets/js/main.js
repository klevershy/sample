const year = document.getElementById('year');
const date = new Date();

year.innerText= date.getFullYear()

// home slider

$('.home-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin: 10,
    nav:true,
    autoplayHoverPause:true,
    items: 1,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1000: {
            items:1,
            nav: true
        }
    }
});


// navbar fixed =====

(function($){
    "use strict"
    $(window).scroll(function(){
        if($(this).scrollTop()> 2){
            $('.navbar-top').addClass('fixed-me');
        }else {
            $('.navbar-top').removeClass('fixed-me')
        }
    })
})(jQuery)

// counter up

$('.counter').counterUp({
    delay: 10,
    time: 3000
});


// testimonials carousel

$('#customer-testimonials').owlCarousel({
    loop:true,
    center: true,
    items:3,
    margin:0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Video popup =====

// const demoTrailer = document.querySelector('.demo-trailer')
// const video = document.querySelector('video')
// const myButton = document.getElementById('myBtn')
// const close = document.querySelector('.close')

// myButton.addEventListener('click', (e) =>{
//     e.preventDefault();
//     demoTrailer.style.visibility = "visible"
//     demoTrailer.style.opacity = 1;
// })
// close.addEventListener('click', () =>{
   
//     demoTrailer.style.visibility = "hidden"
//     demoTrailer.style.opacity = 0;
// });

// --- gallery photo filter

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll('.gallery-item')

filterContainer.addEventListener('click', (e) =>{
    
    const filterSelect = e.target

    if(filterSelect.classList.contains('filter-item')){
        
        filterContainer.querySelector('.active').classList.remove('active');
        filterSelect.classList.add('active')

        const valueFilter = filterSelect.getAttribute('data-filter')
        
            galleryItems.forEach((item) =>{
                if(item.classList.contains(valueFilter) || valueFilter === 'all'){
                    item.classList.remove('hide')
                    item.classList.add('show')
                }else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            })

    }
})


Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,
  
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    },
  });

  


