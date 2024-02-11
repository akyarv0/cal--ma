// ///!------------PARAMETRESİZ FUNCTİON--------//
// function yazdir() {
//   console.log("Veysel");
// }
// yazdir();
// yazdir();

// function topla() {
//   console.log(8 + 9);
// }
// topla();

// //!---------PARAMETRELİ FUNCTİON--------//
// //fonksiyon isminden sonra gelen parantez içine parametreler yazılır.
// function yazdir2(isim, soyisim) {
//   console.log(isim + " " + soyisim);
// }
// yazdir2("veysel", "akyar"); // burda parantez içine yazdığımmız her şeyi console yazdırır.
// yazdir2("hasan", "ali");

// cube(2); //function tanımlandıktan sonra yukarda da çağırsak aşağıda çağırsak aynı şekilde çalışır. çünkü hoisted olayı bu!!!!

// function cube(sayi) {
//   console.log(sayi * sayi * sayi);
// }
// cube(8);

// let yas = Number(prompt("Yaşınızı giriniz: "));
// kontrolEt(yas);
// function kontrolEt(yas) {
//   if (yas >= 18) {
//     console.log("ehliyet alabilirsiniz");
//   }
//   else{
//     console.log("ehliyet alamazsınız");
//   }
// }

//!---------CALL BACK FUNTİON-------//

// function kareAl(sayi) {
//   let sonuc = sayi * sayi;
//   return sonuc;
// }

// function kup(sayi) {
//   let sonuc = sayi * sayi * sayi;
//   let kareSonuc = kareAl(sonuc);
//   console.log(kareSonuc); //return yazdığımızda buraya kup() = sonuc gibi oluyor. kup fonksiyonunu nerede tanımlarsak tanımlayalım artık sonuc değerini çağıracak. sonuc parentez içi yazıldığından local scope oluyor. fonksiyon içinde console yazdırabilirdik ama her zaman çalışmasını istemeyebiliriz sadece istediğimiz zaman çalışması için console.log(deger) diyerek çağırırız. !!! returnden sonra yazolan kodlar çalışmaz.
// }

//?özet:return ---> 1) Bir değeri metodun dışına çıkarmak taşımak için kullanılır.
//?                 2) Bir metodu bitiren anahtar kelimedir.
// kup(9)
let metin = "Kup fonksiyonunu nerede tanımlarsak tanımlayalım artık sonuc değerini çağıracak.";
let harf = prompt("Bulmak istediğiniz harfi giriniz");


function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i) === harf) {
      toplam += 1;
    }
    return toplam;
  }
 
}

