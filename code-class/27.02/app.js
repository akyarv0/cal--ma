//! Bir restoranın menüsünü temsil eden bir JavaScript nesnesi oluşturun. Bu nesne, menüdeki yemeklerin adlarını özellikler olarak içermelidir. Ayrıca, her yemeğin fiyatını döndüren bir metodu da içermelidir. Oluşturduğunuz bu nesneyi kullanarak, menüdeki bir yemeğin adını almak ve fiyatını öğrenmek için nasıl bir JavaScript kodu yazarsınız?

const restoranMenusu = {
  pizza: {
    fiyat: 20
  },
  hamburger: {
    fiyat: 15
  },
  salata: {
    fiyat: 12
  },
  // Yemeğin fiyatını döndüren metod
  getYemekFiyati: function(yemekAdi) {
    if (this[yemekAdi]) {
      return `${yemekAdi} fiyatı: ${this[yemekAdi].fiyat} TL`;
    }
    return `Üzgünüz, ${yemekAdi} menüde bulunmamaktadır.`;
  }
};

// Menüdeki bir yemeğin adını alıp fiyatını öğrenme
const yemekAdi = 'pizza';
const fiyatBilgisi = restoranMenusu.getYemekFiyati(yemekAdi);
console.log(fiyatBilgisi); // "pizza fiyatı: 20 TL"




























//! Bir şirketin çalışanlarını temsil eden bir JavaScript uygulaması yapmanız isteniyor. Her çalışanın adı, departmanı ve maaşı bilgilerini içeren bir nesne dizisi oluşturun. Ardından, şirket içindeki departmanlara göre çalışanların maaş ortalamasını hesaplayan bir fonksiyon yazın. Bu fonksiyon, departman adını parametre olarak alacak ve ilgili departmandaki çalışanların maaş ortalamasını döndürecek. Eğer belirtilen departmanda çalışan yoksa, "Belirtilen departmanda çalışan bulunamadı!" mesajını döndürün. Örneğin:

var calisanlar = [
    { ad: "Ali", departman: "Muhasebe", maas: 4000 },
    { ad: "Ayşe", departman: "İnsan Kaynakları", maas: 6000 },
    { ad: "Fatma", departman: "Muhasebe", maas: 4500 },
    { ad: "Mehmet", departman: "Satış", maas: 5500 },
    { ad: "Ahmet", departman: "İnsan Kaynakları", maas: 5000 }
  ];



  
  function departmanMaasOrtalamasi(departman) {
    
    // Kodunuzu buraya yazın
  }
  
  // Örnek kullanım:
  console.log(departmanMaasOrtalamasi("Muhasebe")); // Beklenen çıktı: 4250
  console.log(departmanMaasOrtalamasi("Satış")); // Beklenen çıktı: 5500
  console.log(departmanMaasOrtalamasi("Bilgi Teknolojileri")); // Beklenen çıktı: Belirtilen departmanda çalışan bulunamadı!






















  












  //! Bir online öğrenci takip sistemi geliştiriyorsunuz. Her öğrencinin adı, sınıfı ve aldığı dersler bilgilerini içeren bir öğrenci nesnesi oluşturun. Ayrıca, her dersin adı, öğretmeni ve öğrencilere verilen notlar bilgilerini içeren bir ders nesnesi oluşturun.

// 1. Öğrencilerin derslere kaydolmasını sağlayan bir fonksiyon yazın. Bu fonksiyon, öğrencinin adını ve kaydolmak istediği dersleri almalıdır.
// 2. Bir öğrencinin aldığı notları görüntüleyen bir fonksiyon yazın. Bu fonksiyon, öğrencinin adını almalı ve aldığı dersler ile bu derslerde aldığı notları listelemelidir.
// 3. Bir dersin öğrencilerinin not ortalamasını hesaplayan bir fonksiyon yazın. Bu fonksiyon, dersin adını almalı ve bu derse kayıtlı öğrencilerin not ortalamasını döndürmelidir.

// Bu özellikleri gerçekleştiren bir JavaScript programı yazın.


// Öğrenci ve ders nesneleri oluşturulması