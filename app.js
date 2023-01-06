var burgerMenu = document.querySelector('.mobileMenuButton')
var list = document.querySelector(".primaryNavigation")
var arrow1 = document.querySelector("#arrow1")
var arrow2 = document.querySelector("#arrow2")
var arrow3 = document.querySelector("#arrow3")

var closeIcon = document.querySelector(".menuOpener")
burgerMenu.addEventListener("click", ()=>{
    arrow1.src="images/icon-arrow-dark.svg"
    arrow2.src="images/icon-arrow-dark.svg"
    arrow3.src="images/icon-arrow-dark.svg"
    if(list.ariaExpanded=="false"){
        closeIcon.src="images/icon-close.svg"
        list.classList.add("opened")
        list.classList.remove("closed")
        list.setAttribute("aria-expanded", "true")
    }else if(list.ariaExpanded=="true"){
        closeIcon.src="images/icon-hamburger.svg"
        list.classList.remove("opened")
        list.classList.add("closed")
        list.setAttribute("aria-expanded", "false")
    }
    
})

var firstCategory = document.getElementById("firstCategory")
var secondCategory = document.getElementById("secondCategory")
var thirdCategory = document.getElementById("thirdCategory")

var firstSublist = document.getElementById("firstSublist")
var secondSublist = document.getElementById("secondSublist")
var thirdSublist = document.getElementById("thirdSublist")
firstCategory.addEventListener("click", ()=>{
    secondSublist.classList.add("closed")
    secondSublist.classList.remove("opened")
    thirdSublist.classList.add("closed")
    thirdSublist.classList.remove("opened")

    if(firstSublist.classList.contains("closed")){
        firstSublist.classList.add("opened")
        firstSublist.classList.remove("closed")
        
    } else if(!firstSublist.classList.contains("closed")){
        firstSublist.classList.add("closed")
        firstSublist.classList.remove("opened")
        
    }
})


secondCategory.addEventListener("click", ()=>{
    thirdSublist.classList.add("closed")
    thirdSublist.classList.remove("opened")
    firstSublist.classList.add("closed")
    firstSublist.classList.remove("opened")
    if(secondSublist.classList.contains("closed")){
        secondSublist.classList.add("opened")
        secondSublist.classList.remove("closed")
    } else if(!secondSublist.classList.contains("closed")){
        secondSublist.classList.add("closed")
        secondSublist.classList.remove("opened")
    }
})


thirdCategory.addEventListener("click", ()=>{
    secondSublist.classList.add("closed")
    secondSublist.classList.remove("opened")
    firstSublist.classList.add("closed")
    firstSublist.classList.remove("opened")
    if(thirdSublist.classList.contains("closed")){
        thirdSublist.classList.add("opened")
        thirdSublist.classList.remove("closed")
    } else if(!thirdSublist.classList.contains("closed")){
        thirdSublist.classList.add("closed")
        thirdSublist.classList.remove("opened")
    }
})
