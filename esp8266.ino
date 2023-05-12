#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

// WiFi bağlantısı
const char* ssid = "seyit1";
const char* password = "seyityahya4324";

// Aracı sunucu adresi
const char* server8A = "http://172.16.101.22:5000/api/siniflar/644cea6d4f3781369cb55fcd";
const char* server8B = "http://172.16.101.22:5000/api/siniflar/644cea7a4f3781369cb55fce";
const char* serverKoridor = "http://172.16.101.22:5000/api/siniflar/645ccd504c4e0531b8b3804f";

// LED pin numarası
const int ledPin = D1;
const int ledPin2 = D8;
const int ledPin3 = D5;

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
  pinMode(ledPin3, OUTPUT);
}

void loop() {
  // HTTP isteği oluşturma
  HTTPClient http;
  HTTPClient http2;
  HTTPClient http3;
  WiFiClient client;
  http.begin(client, server8A);
  http2.begin(client, server8B);
  http3.begin(client, serverKoridor);

  // HTTP isteği gönderme ve yanıtı alıp yazdırma
  int httpCode = http.GET();
  int httpCode2 = http2.GET();
  int httpCode3 = http3.GET();

  if (httpCode > 0 && httpCode2 > 0 && httpCode3 > 0) {
    String durum8A = http.getString();
    String durum8B = http2.getString();
    String durumKoridor = http3.getString();
    Serial.print("8-A : ");
    Serial.println(durum8A);
    Serial.print("8-B : ");
    Serial.println(durum8B);
    Serial.print("Koridor : ");
    Serial.println(durumKoridor);

    // "led_durumu" adlı değişkenin değerine göre LED'i aç veya kapat
    if (durum8A == "true") {
      digitalWrite(ledPin, HIGH);
    }
    else {
      digitalWrite(ledPin, LOW);
    }
    if (durum8B == "true") {
      digitalWrite(ledPin2, HIGH);      
    }
    else {
      digitalWrite(ledPin2, LOW);
    }
    if (durumKoridor == "true"){
      digitalWrite(ledPin3, HIGH);
    }
    else {
      digitalWrite(ledPin3, LOW);
    }

  } else {
    Serial.println("HTTP isteği başarısız.");
    Serial.println(httpCode);
  }

  // HTTP isteğini sonlandırma ve 5 saniye bekleyerek tekrarlama
  http.end();
  delay(5000);
}
