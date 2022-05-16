let disp=document.querySelectorAll('img')
let a=document.querySelector('a')

disp.forEach(e=>{
 e.addEventListener("click",()=> {
  a.append(disp)
  
  })
})
