let carouselSlide=document.querySelector("#sc-carousel"),
    nextBtn=document.querySelector(".next"),
    prevBtn=document.querySelector(".prev"),
    carouselIndicators=carouselSlide.querySelectorAll(".sc-carousel-indicators button"),
    navEle=document.querySelector("nav.navbar"),
    navLinks=document.querySelectorAll("nav .nav-link"),
    sections=document.querySelectorAll('section,header'),
    theBodiesOfPopup=document.querySelectorAll(".popup .body"),
    popupLinks=document.querySelectorAll(".popup[data-popup-name='nav'] ul li a"),
    navOfMenuElements=document.querySelectorAll("#Menu .navMenu li"),
    menuContainer=document.querySelectorAll("#Menu .part"),
    loadingPage=document.querySelector(".loadingPage");
    
    scrollOfNav();
nextBtn.addEventListener("click",function(){
    let currentSlide=document.querySelector("#sc-carousel .sc-carousel-item.active"),
    nextSlide=currentSlide.nextElementSibling ?? carouselSlide.querySelector(".sc-carousel-item:first-child") ;
    addActive(currentSlide,nextSlide);
})
    
prevBtn.addEventListener("click",function(){
        let currentSlide=document.querySelector("#sc-carousel .sc-carousel-item.active"),
        previousSlide=currentSlide.previousElementSibling ?? carouselSlide.querySelector(".sc-carousel-item:last-child") ;
    addActive(currentSlide,previousSlide)
})

carouselIndicators.forEach(function(indicator){
    indicator.addEventListener("click",function(){
        let newSlide=carouselSlide.querySelector(`.sc-carousel-item[data-slide-number="${indicator.dataset.slideNumber}"]`),
        currentSlide=carouselSlide.querySelector(".sc-carousel-item.active.show");
        addActive(currentSlide,newSlide);
    })
})

window.addEventListener("scroll",function(){
    scrollOfNav()
    sections.forEach(function(section){
        changActiveWhileScroll(section);
    })

    
})



navLinks.forEach(function(navLink){
    navLink.addEventListener("click",function(e){
        e.preventDefault();
        let currentNavLink=document.querySelector('nav .nav-link.active');
        window.scrollTo(0,changActiveForNav(currentNavLink,navLink))
    })
})


popupLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        let currentNavLink=document.querySelector('.popup a.active');
        closePopup()
        window.scrollTo(0,changActiveForPopup(currentNavLink,link));
    })
    
})


navOfMenuElements.forEach(function(navEle){
    navEle.addEventListener('click',function(){
        let currentNavEle=document.querySelector("#Menu .navMenu li.active");
        currentNavEle.classList.remove('active');
        navEle.classList.add('active')
    })

})





theBodiesOfPopup.forEach(function(body){
    body.addEventListener("click",function(e){
    console.log(body)
    e.stopPropagation();
})
})

menu(BreakFast)

window.addEventListener("DOMContentLoaded",function(){
    loadingPage.classList.add("hide");
    setTimeout(function(){
        loadingPage.classList.add("d-none");
    },1000)
})