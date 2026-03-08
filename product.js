//seclecting side navbar,menuIcon
  
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//searching functionality
var productcontainer=document.getElementById("product-container")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
 search.addEventListener("keyup",function(){
    var enterdvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count++){
        var productname=productlist[count].querySelector("h1").textContent.toUpperCase()
        if(productname.toUpperCase().indexOf(enterdvalue)<0){
            productlist[count].style.display="none"
        }else{
            productlist[count].style.display="block"
        }
    }
 })