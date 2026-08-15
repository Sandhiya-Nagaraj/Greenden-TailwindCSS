var sideNav = document.getElementById("sideNav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("closeNav")

menuicon.addEventListener("click",function(){

    sideNav.style.right = 0
})

closeNav.addEventListener("click", function(){

    sideNav.style.right =" -50%"
})

//product Search 

var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase()

    for(count = 0; count < productList.length; count=count+1)
    {
        var productName = productList[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"

        }
        else{
            productList[count].style.display="block"
        }
    }
})