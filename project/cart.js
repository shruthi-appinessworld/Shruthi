// let carts = document.querySelectorAll('.add-cart');

// let products = [
//     {
//         name: 'frock',
//         tag: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8486571a.webp",
//         price: 2500,
//         inCart: 0
//     }, {
//         name: 'gown',
//         tag: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10226309b.jpg",
//         price: 1500,
//         inCart: 0
//     }, {
//         name: 'sleep wear',
//         tag: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10271678a.webp",
//         price: 600,
//         inCart: 0
//     }, {
//         name: 'dress',
//         tag: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8486571a.webp",
//         price: 1800,
//         inCart: 0
//     }, {
//      name: 'shoe',
//      tag: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2846033a.webp",
//      price: 1200,
//      inCart: 0
//  }, {

//     }
// ];

// function cartNumbers(product) {
//     let productNumbers = localStorage.getItem('cartNumbers')
//     productNumbers = parseInt(productNumbers)

//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.spanclass').textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem('cartNumbers', 1)
//         document.querySelector('.spanclass').textContent = 1;
//     }
//     setItems(product);
// }

// for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         cartNumbers(products[i])
//         totalCost(products[i])
//     })
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if (productNumbers) {
//      console.log( document.querySelector('.spanclass').textContent)
//         document.querySelector('.spanclass').textContent = productNumbers;
       
//     }
// }

// function setItems(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     if (cartItems != null) {
//         if (cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].inCart += 1
//     } else {
//         product.inCart = 1;
//         cartItems = {
//             [product.tag]: product
//         }
//     }
//     localStorage.setItem("productsInCart", JSON.stringify
//         (cartItems))
// }

// function totalCost(product) {
//     let cartCost = localStorage.getItem('totalCost')


//     if (cartCost != null) {
//         cartCost = parseInt(cartCost);
//         localStorage.setItem('totalCost', cartCost + product.price);
//     } else {
//         localStorage.setItem('totalCost', product.price);
//     }
// }

// function displayCart() {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems)
//     let productContainer = document.querySelector(".products");
//     let cartCost = localStorage.getItem('totalCost')

//     if (cartItems && productContainer) {
//         productContainer.innerHTML = '';
//         Object.values(cartItems).map(item => {
//             productContainer.innerHTML += ` 
//             <div class="product">
            
//             <img src="./images/${item.tag}.jpg">
//             <span>${item.name}</span>
//             <div class="price"> &#8377 ${item.price}.00</div>
//             <div class="quantity">
           
//             <span>${item.inCart}</span>
            
//             </div>
//             <div class="total"> &#8377 ${item.inCart * item.price}.00</div>
//             </div>`
//         })
//         productContainer.innerHTML += `
//         <div class="basketTotalContainer">
//         <h4 class="basketTotalTitle">Basket Total  </h4>
//         <h4 class="basketTotal"> &#8377 ${cartCost}.00</h4>
//         </div>`
//     }
//     // <ion-icon name="caret-back-circle-outline"></ion-icon>
//     // <ion-icon name="caret-forward-circle-outline"></ion-icon>
//     // <ion-icon name="close-circle-outline"></ion-icon>
// }


// onLoadCartNumbers()
// displayCart()
let arrObj=[]
let i=0;
let j=0;
let addCart=document.querySelectorAll('.add-cart')
console.log(addCart)
addCart.forEach((e)=>{
    e.addEventListener('click',(a)=> {
            i++;
        console.log(i)
           let x= e.previousElementSibling
           let y=x.previousElementSibling
           let z=y.previousElementSibling
           console.log(x)
           console.log(y)
           console.log(z)
       
       arrObj[j]={img:z,h1:y,h2:x}
       
          console.log(arrObj)
        })
})
let container=document.querySelector(".container")
let products=document.querySelector(".products")
console.log(products)
console.log(arrObj)


arrObj.forEach(e=>{
    products.append(e.img,e.h1,e.h2)
    container.append(products)
})
 export {i,arrObj}