let span=document.querySelectorAll("span")
const arry=['red','green','blue','yellow','orange','meganta','olive','yellow','yellow-green,blue'];
let i=0;
for(let sp of span) {
sp.style.color=arry[i++];
}


const name=document.getElementById('userName');
const pwd=document.getElementById('password');
const button=document.querySelector('button');
const error=document.getElementById('error')

const user=["shruthilr69@gmail.com"];
const password=["Chetas@2019"];

button.addEventListener('click',(e)=> {
 if(user.includes(name.value)){
  console.log('ok')
  if(name.value===user[user.indexOf(name.value)] && pwd.value===password[user.indexOf(name.value)]){
window.location.href="home.html"
  }
 }
 else {
  alert("invalid details")
 }

})
