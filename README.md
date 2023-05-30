## 🏫 Akıllı Okul Işıklandırma Sistemi

### Proje Hakkında

* Proje okuldaki ihtiyaç dışı yanmakta olan lambalar sebebiyle oluşan enerji insafını önlemek için yapılmıştır. İhtiyaç dışı yanan bu lambalar enerji israfınına yol açmaktadır. Projenin günlük hayatta daha rahat aktarılabilmesi için prototip yapılmıştır. Prototif sınıflar ve koridordan oluşmaktadır. Prototipte ders saatlerinde koridor ışığını kapalı olması teneffüs saatlerinde ise otomatik olarak açılması planlanmıştır. Yapılacak olan prototiple projenin anlaşılırlığını arttırılması hedeflenmiştir. Bir web sitesi oluşturulup örnek ders programı siteye yüklenebilmektedir. Böylece veriler ESP8266 wi-fi modülü yardımıyla veritabanından alınan bilgilerle lambalar kontrol edilebilmektedir.
*  İlk olarak __NODE.JS__ ile backend sistemi kurulmuştur. Veritabanı olarak __MongoDB__ kullanılmıştır. Frontend olarak __REACT__ kullanılmıştır. __ESP8266__ wi-fi modülü ise Arduino.IDE ile kodlanacaktır.

-----------

https://github.com/seyityahya/smart_school_lighting_management/assets/84639970/1dc0e082-2ce2-43b6-a0e7-6b13e9ec7524

-----------

## 📚 Kullanılan Kütüphaneler
- **Backend** : axios, bcrypt, boom, cors, dotenv, express, ioredis, joi, jsonwebtoken, mongoese, node-cron
- **Frontend** : chakra-ui, antd, axios, formik, react-icons, react-query, react-router-dom, yup
- **Database** : mongodb

------------

## 💻 Projeyi çalıştırmak
- İlk olarak backend klasörünün altında **.env** dosyası kuralım.
```
    MONGO_URI=mongodb+srv://*******:******@seyit.jwhpjae.mongodb.net/test2?retryWrites=true&w=majority
    JWT_SECRET=sdgkMKEVlm3v23kl_n423vGG3b_TVnm234xnv23
    JWT_REFRESH_SECRET=rerv1jv15v1CVBnasd23jnv1j3123nvrqwr23
```
- Daha sonra backend'in gerekliliğini kurmak için ```cd backend``` ile backend klasörünün içine girelim.
- ```npm install``` yazarak gerekli kütüphanelerin kurulmasını sağlayalım
- Aynısı fronend klasörü içinde yapalım
- backend için ```npm run dev``` , frontend için ```npm start``` yazarak projemizi çalıştıralım.
- Son olarak [localhost:3000](http://localhost:3000/) adresinden projemizi gözlemleyebiliriz.
-  Esp8266 kart modülü üzerinde görüntülemek isterseniz ```èsp8266.ino``` dosyasında bulunan pinlere göre doğru devreyi kurmanız gerekmektedir.
- ```esp8266.ino``` dosyasını alarak Arduino.ide uygulaması üzerinden kodu esp8266 kart modülünü üzerine atarak sistemi çalıştırabilirsiniz.

## Kaynakça

[React dökümasyonu](https://reactjs.org/)

[Express dökümasyonu](https://expressjs.com/)
