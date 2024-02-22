// Kodlar buraya yazılacak.

//---------HEADER----------//
const headerTitle = document.getElementById("title");
console.log(headerTitle);
headerTitle.innerText = "JS DOM Assigment 1";
headerTitle.style.color = "white";
headerTitle.style.textAlign = "center";

const headerAfter = document.getElementsByClassName("header");
console.log(headerAfter);
headerAfter[0].style.backgroundColor = "red";

const ulAfter = document.getElementsByClassName("nav-item");
console.log(ulAfter);
Array.from(document.getElementsByClassName("nav-item")).forEach((item) => {
  item.style.cssText =
    "display: flex; justify-content: center; align-items: center; margin: 10px 0px; list-style: none";
});

ulAfter[0].style.backgroundColor = "green";
ulAfter[0].style.color = "white";

const homeLi = document.getElementById("home");
console.log(homeLi);
homeLi.style.marginRight = "10px";
homeLi.style.padding = "10px";

//----------MAIN----------//

const mainAfter = document.getElementsByTagName("main");
console.log(mainAfter);

const sectionAfter = document.getElementsByTagName("section");
console.log(sectionAfter);
sectionAfter[0].style.cssText =
  "border: 1px solid black; padding: 10px; margin: 10px; border-radius: 10px; display: flex; flex-direction: row; gap: 10px; box-shadow: 0 0 10px fuchsia;";

const inputUsername = document.getElementById("username");
console.log(inputUsername);
inputUsername.placeholder = "Username";
const inputPassword = document.getElementById("password");
console.log(inputPassword);
inputPassword.placeholder = "Password";

const btnAfter = document.getElementsByClassName("btn");
console.log(btnAfter);
btnAfter[0].style.cssText = "background-color: green; color: black; padding: 10px; border: 1px solid black; border-radius: 5px; cursor: pointer; opacity: 0.8;width: 5rem; height: 3rem; white-space: nowrap ; margin: auto; box-shadow: 0 0 10px fuchsia; ";
btnAfter[0].innerText = "Giris Yap";

const inputTag = document.getElementsByTagName("input");
console.log(inputTag);
inputTag[0].style.cssText = "width: 10rem; height: 2rem; margin:auto;";
inputTag[1].style.cssText = "width: 10rem; height: 2rem; margin:auto;";

//----------PROJECT----------//
const projects = document.getElementById("projects");
console.log(projects);
projects.innerText = "JS DOM Projects";

const h3After = document.getElementsByTagName("h3");
console.log(h3After);
h3After[0].style.cssText = "text-align: center;";



const ulMain = document.querySelector("#projects ul"); // "projects" id'li elementin içindeki "ul" elementini seçiyoruz

for (let i = 1; i <= 5; i++) {
  const newLi = document.createElement("li"); // Yeni bir "li" elementi oluşturuyoruz
  const textNode = document.createTextNode("Proje " + i); // Yeni liste öğesinin metnini oluşturuyoruz
  newLi.appendChild(textNode); // Yeni "li" elementinin içeriğine metni ekliyoruz
  ulMain.appendChild(newLi); // "ulMain" elementinin içine yeni "li" elementini ekliyoruz
}
console.log(ulMain);








