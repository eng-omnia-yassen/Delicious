function addActive(currentSlide,nextSlide){
    currentSlide.classList.remove("active");
    currentSlide.classList.remove("show");
    nextSlide.classList.add("active");
    setTimeout(function(){
        nextSlide.classList.add("show");
    },0);
}

function scrollOfNav(){
    if(window.scrollY>10){
        navEle.classList.add("scroll")
    }
    else{
        navEle.classList.remove("scroll")
    }
}


function changActiveForNav(prevNavLink,currentNavLink){
    prevNavLink.classList.remove('active');
    currentNavLink.classList.add('active');   
    let sectionId=currentNavLink.getAttribute('href'),
        topOfSection=document.querySelector(sectionId).offsetTop-navEle.clientHeight+2;
    return topOfSection;
}


function changActiveForPopup(prevNavLink,currentNavLink){
    prevNavLink.classList.remove('active');
    prevNavLink.classList.remove('squares');
    currentNavLink.classList.add('active');
    currentNavLink.classList.add('squares');   
    let sectionId=currentNavLink.getAttribute('href'),
        topOfSection=document.querySelector(sectionId).offsetTop-navEle.clientHeight+1;
    return topOfSection;
}

function changActiveWhileScroll(section){
    let topOfSection=section.offsetTop-navEle.clientHeight,
        heightOfSection=section.clientHeight+topOfSection,
        currentNavLink=navEle.querySelector(".nav-link.active");
    if(window.scrollY>topOfSection&&window.scrollY<heightOfSection){
        let sectionId=section.getAttribute("id"),
        navLinkOfSection=document.querySelector(`a[href='#${sectionId}']`);
        currentNavLink.classList.remove('active');
        navLinkOfSection.classList.add('active');   
        
    }
}

function showProduct(productId){
    
    let meal= allMenu.filter((meal)=>meal.id==productId)[0];
    let productPopup=document.querySelector('.popup[data-popup-name="product"] .content .box');
    productPopup.innerHTML='';
    console.log(productPopup)
    productPopup.innerHTML=`
        <div class="top mb-3">
            <h2 class="text-light mainHeader">${meal.name}</h2>
        </div>
        <div class="bottom w-100">
            <div class="image position-relative">
                <img src="images/${meal.images}" alt="BF-1" class="img-fluid mb-3">
                <div class="prev position-absolute">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="next position-absolute">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <p class="position-absolute">$35.92</p>
            </div>
            <p class="text-start">${meal.description}</p>
        </div>
    `;
    openPopup('product');

}



function menu(typeOfMeal){
    typeOfMeal.forEach(function(meal,index){
        if(index<=2){
             menuContainer[0].innerHTML+=`
                <div class="meal me-lg-5">
                    <div class="row row2 d-flex align-items-center justify-content-center">
                        <div class="image col-5 col-lg-3 d-flex justify-content-center  align-items-center">
                            <div class="item position-relative">
                                <img src="images/${meal.images}" alt="${meal.images}" class="img-fluid">
                                <div class="layout position-absolute">
                                    <i class="fa-regular fa-square-plus text-black" onclick="showProduct(${meal.id})"></i>
                                </div>
                            </div>
                        </div>
                        <div class="text col-7 col-lg-9 d-flex align-items-center">
                            <div class="item textColor">
                                <div class="header d-flex  justify-content-lg-center  align-items-sm-center align-items-md-start align-items-lg-center  flex-column flex-sm-row flex-md-column flex-lg-row">
                                <h4 class="mainColor mb-0">${meal.name}</h4>
                                    <span class="mx-3 mb-0 d-none d-sm-block d-md-none d-lg-block"></span>
                                    <h4 class="mainColor">$${meal.price}</h4>
                                </div>
                                <p class="mb-0">${meal.description.slice(0,100)}....</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }else{

            menuContainer[1].innerHTML+=`
                <div class="meal me-lg-5">
                    <div class="row row2 d-flex align-items-center justify-content-center">
                        <div class="image col-5 col-lg-3 d-flex justify-content-center  align-items-center">
                            <div class="item position-relative">
                                <img src="images/${meal.images}" alt="${meal.images}" class="img-fluid">
                                <div class="layout position-absolute">
                                    <i class="fa-regular fa-square-plus text-black" onclick="showProduct(${meal.id})"></i>
                                </div>
                            </div>
                        </div>
                        <div class="text col-7 col-lg-9 d-flex align-items-center">
                            <div class="item textColor">
                                <div class="header d-flex  justify-content-lg-center  align-items-sm-center align-items-md-start align-items-lg-center  flex-column flex-sm-row flex-md-column flex-lg-row">
                                <h4 class="mainColor mb-0">${meal.name}</h4>
                                    <span class="mx-3 mb-0 d-none d-sm-block d-md-none d-lg-block"></span>
                                    <h4 class="mainColor">$${meal.price}</h4>
                                </div>
                                <p class="mb-0">${meal.description.slice(0,100)}....</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        }
    })

}

function openPopup(popupName){
    let popupEle=document.querySelector(`.popup[data-popup-name=${popupName}]`);
    popupEle.classList.add("active");
    setTimeout(function  () {
        popupEle.classList.add("show");
    }, 10);
}

function closePopup(){
    let popupEle=document.querySelector(`.popup.active`);
    popupEle.classList.remove("show");
    setTimeout(function(){
        popupEle.classList.remove("active")
    },500);
}