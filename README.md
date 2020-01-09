# Couch Surfing Ev Arama Uygulaması Post Modülü

#### Emil Mammadov 150201200

### Modül özellikleri

Bu modülde kullanıcı ev arayabilmek için uygulama içerisinde durum paylaşabilir. 
Paylaşığı duruma ev aradığı şehir bilgisini girmesi de gerekmektedir. 
Kullanıcı şehir bilgisini girdikten sonra durumu paylaştığında, bu durumu sadece aranan şehirde ikamet edenler ve o şehiri takip edenler görebilir. 
Bunun yanısıra kullanıcı uygulamaya giriş yaptıktan sonra karşısına zaman tüneli çıkmaktadır. 
Bu zaman tünelinde kullanıcı sadece takip ettiği şehirler ile alakalı gönderileri görmektedir. 
Kullanıcı istediği halde `Pipe` vasıtasıyla `SearchBar` üzerinden, kullanıcı adı, şehir veya gönderi içeriği ile alakalı arama ve filtreleme işlemlerini başarılı bir şekilde gerçekleştirebilir. 
Bununla birlikte kullanıcı sadece kendi gönderilerini görmek isterse profil bölümünden buraya ulaşabilir. 
Kullanıcı kendi gönderilerine baktığında veriler ilk başta `Local Veritabanından` çekilip kullanıcıya gösterilir.

### Modülde Kullanılan UI Component'ler
- `SearchBar`
- `ion-button`
- `ion-card`
- `Alert`
- `Toast`
- `ion-select`
- `ion-badge`
- `ion-item-divider`
- `ion-fab-button`
- `ion-chip`
- `ion-spinner`
- `ion-textarea`
- `ion-toolbar`
- `vb..`

### Modülde kullanılan Native API
Modül içerisinde durum paylaşma sayfasında kullanıcının gps verileri `Geolocation API`
üzerinden alınıyor. Bu `API` üzerinden alınan konum bilgileri kullanıcıya gösterilerek,
ev ararken doğru şehirde arama yapılması için uyarılması sağlanıyor. Modülde `Geolocation API`
ile sadece konum bilgileri kullanıcıya gösteriliyor. Konum bilgisinden şehir tahmini ise bu `API`'ın Enterprise sürümü ile yapılması gerektiğinden ücretsiz sağlanamıyor.
 

