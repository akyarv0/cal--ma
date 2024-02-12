// let sayi1 = parseFloat(prompt("1. sayıyı giriniz"));
// let sayi2 = parseFloat(prompt("2. sayıyı giriniz"));
// let islem = prompt("Yapmak istediğiniz işlemi giriniz (+, -, *, /):");

// let hesapMakinesi = (sayi1, sayi2, islem) => {
//   let sonuc; // Declare sonuc without initializing to 0
//   if (islem == "+") {
//     sonuc = sayi1 + sayi2;
//   } else if (islem == "-") {
//     sonuc = sayi1 - sayi2;
//   } else if (islem == "*") {
//     sonuc = sayi1 * sayi2;
//   } else if (islem == "/") {
//     if (sayi2 !== 0) {
//       sonuc = sayi1 / sayi2;
//     } else {
//       console.log("Sıfıra bölme hatası");
//       return; // Exit the function early
//     }
//   } else {
//     console.log("Geçersiz işlem");
//     return; // Exit the function early
//   }
//   console.log("Sonuç:", sonuc); // Log the result
// };

// hesapMakinesi(sayi1, sayi2, islem); // Call the function without logging the return value

// let EvenOrOdd = (number) =>

//   number % 2 === 0
//     ? console.log("Girdiğiniz sayı çifttir.")
//     : console.log("Girdiğiniz sayı tektir.");

// EvenOrOdd(86);
// EvenOrOdd(73);

// let alanHesapla = (yaricap)=> {
//     let alan = Math.PI*yaricap**2
//     console.log(alan);

// }
// alanHesapla(2);

// let yasHesapla = (dogumTarihi)=>{
//     let yas = 2024-dogumTarihi
//     console.log(yas);
// }
// yasHesapla(1966)

// let alanUcgen = (taban,yukseklik) => {
//     // let taban =+prompt("Taban değerini giriniz:");
//     // let yukseklik =+prompt("Yükseklik değerini giriniz:");
//     let alan = taban*yukseklik/2
//     // console.log(alan);
//     return alan

// }
// console.log(alanUcgen(4,3));
// console.log(alanUcgen(23,62));

let kareAl = (sayi) => {
  let sonuc = sayi ** 2;
  return sonuc;
};
console.log(kareAl(5));

// let leapYear = function (year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`Girdiğiniz ${year} artık yıldır`);
//   } else {
//     console.log(`Girdiğiniz ${year} artık yıl değildir.`);
//   }
// };


// leapYear(2020);
// leapYear(1900);
// leapYear(2000);

// let leapYear = function () {
//   let girilenYear = +prompt("Yıl giriniz"); // Kullanıcıdan yıl bilgisini alın ve sayıya dönüştürün
//   if ((girilenYear % 4 === 0 && girilenYear % 100 !== 0) || girilenYear % 400 === 0) {
//     console.log(`Girdiğiniz ${girilenYear} artık yıldır`); // Artık yıl ise konsola yazdır
//   } else {
//     console.log(`Girdiğiniz ${girilenYear} artık yıl değildir.`); // Artık yıl değilse konsola yazdır
//   }
// };

// leapYear(); // Fonksiyonu çağır

let leapYear = function () {
  let girilenYear = +prompt("Yıl giriniz");
  if ((girilenYear % 4 === 0 && girilenYear % 100 !== 0) || girilenYear % 400 === 0) {
    console.log(`Girdiğiniz ${girilenYear} artık yıldır`);
  } else {
    console.log(`Girdiğiniz ${girilenYear} artık yıl değildir.`);
  }
};

// Call the function without arguments
leapYear();
