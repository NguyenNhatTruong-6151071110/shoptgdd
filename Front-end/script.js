// address
const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector("#address-close")
//console.log(addressbtn)
addressbtn.addEventListener("click", function(){
    document.querySelector(".address-form").style.display = "flex"
})
addressclose.addEventListener("click", function(){
    document.querySelector(".address-form").style.display = "none"
})
//slider
const rightbtn = document.querySelector('.next')
let index = 0
const leftbtn = document.querySelector('.prev')
const imgNumb = document.querySelectorAll('.slider-content-left-top img')
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumb.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100 +"%"
})
leftbtn.addEventListener("click", function(){
    index = index -1
    if(index <= 0){
        index = imgNumb.length - 1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100 +"%"
})
// slider1
const imgNumbLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumbLi.forEach(function(image,index){
    image.addEventListener("click", function () {
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider2---------------------
function imgauto(){
    index = index + 1
    if(index > imgNumb.length - 1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNumbLi[index].classList.add("active")
}
setInterval(imgauto,5000)
// ---slider product ----------------
const rightbtn1 = document.querySelector('.next1')
const leftbtn1 = document.querySelector('.prev1')
const imgNumb1 = document.querySelectorAll('.slider-product-1-content-items')

rightbtn1.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumb1.length-1){
        index = 0
    }
    document.querySelector(".slider-product-1-content-items-content").style.right = index *100 +"%"
})
leftbtn1.addEventListener("click", function(){
    index = index -1
    if(index <= 0){
        index = imgNumb1.length - 1
    }
    document.querySelector(".slider-product-1-content-items-content").style.right = index *100 +"%"
})
// ------------slider pay---------------
const rightbtn2 = document.querySelector('.next2')
const leftbtn2 = document.querySelector('.prev2')
const imgNumb2 = document.querySelectorAll('.slider-pay-content-items')

rightbtn2.addEventListener("click", function(){
    index = index + 1
    if(index > imgNumb2.length - 1){
        index = 0
    }
    document.querySelector(".slider-pay-content-items-content").style.right = index *100 +"%"
})

leftbtn2.addEventListener("click", function(){
    index = index - 1
    if(index <= 0){
        index = imgNumb2.length - 1
    }
    document.querySelector(".slider-pay-content-items-content").style.right = index *100 +"%"
})
