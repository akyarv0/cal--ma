//***********************************/
//*        CHECKOUT APP
//***********************************/

//! Donguler ile event tanımlamak mümkündür ancak fazla sayida event fazla tuketimi demektir. Bunun yerine bubbling ile parent elementler tek bir event tanımlanarak aşağıdaki elementlerin eventler yakalabilir. Yakalan event event.target ile ayrıştırılabilir.

//? Selectors
const deleteAllbtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products")

//? Event Handler

deleteAllbtn.addEventListener("click", ()=>{
    // console.log(deleteAllbtn);
    products.textContent="No products"
    products.classList.add("no-product")
})
