#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

// WiFi bağlantısı
const char* ssid = "seyit1";
const char* password = "seyityahya4324";

// Aracı sunucu adresi
const char* server8A = "http://192.168.1.102:5000/api/siniflar/644cea6d4f3781369cb55fcd";
const char* server8B = "http://192.168.1.102:5000/api/siniflar/644cea7a4f3781369cb55fce";

// LED pin numarası
const int ledPin = D0;
const int ledPin2 = D1;

void setup() {
  // Seri port başlatma
  Serial.begin(115200);

  // WiFi bağlantısı kurma
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("WiFi bağlanıyor...");
  }
  Serial.println("WiFi bağlantısı başarılı.");

  // LED pinini çıkış yapma
  pinMode(ledPin, OUTPUT);
  pinMode(ledPin2, OUTPUT);
}

void loop() {
  // HTTP isteği oluşturma
  HTTPClient http;
  HTTPClient http2;
  WiFiClient client;
  http.begin(client, server8A);
  http2.begin(client, server8B);

  // HTTP isteği gönderme ve yanıtı alıp yazdırma
  int httpCode = http.GET();
  int httpCode2 = http2.GET();
  if (httpCode > 0 && httpCode2 > 0) {
    String durum8A = http.getString();
    String durum8B = http2.getString();
    Serial.print("8-A : ");
    Serial.println(durum8A);
    Serial.print("8-B : ");
    Serial.println(durum8B);

    // "led_durumu" adlı değişkenin değerine göre LED'i aç veya kapat
    // if (durum8A == "true") {
    //   digitalWrite(ledPin, HIGH);
    //   digitalWrite(ledPin2, LOW);
    //   Serial.println( durum8A);
    // } else {
    //   digitalWrite(ledPin, LOW);
    //   digitalWrite(ledPin2, HIGH);
    //   Serial.println( durum8B);
    // }
  } else {
    Serial.println("HTTP isteği başarısız.");
    Serial.println(httpCode);
  }

  // HTTP isteğini sonlandırma ve 5 saniye bekleyerek tekrarlama
  http.end();
  delay(10000);
}
