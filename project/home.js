console.log("js is working!!!!")
let list=document.querySelector(".list");
document.querySelector("#poco").addEventListener("click",()=> {
 let cartvalue=document.querySelector("#addtocart").value
 console.log(cartvalue)
 let li=document.createElement("li")
 li.innerText=cartvalue;
 list.appendChild(li)
 
})

