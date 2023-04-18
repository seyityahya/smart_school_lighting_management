#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

// WiFi bağlantısı
const char* ssid = "seyit1";
const char* password = "seyityahya4324";

// Aracı sunucu adresi
const char* serverName = "http://172.20.10.5:5000/api/ledAc";

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
  WiFiClient client;
  http.begin(client, serverName);

  // HTTP isteği gönderme ve yanıtı alıp yazdırma
  int httpCode = http.GET();
  if (httpCode > 0) {
    String payload = http.getString();
    Serial.println(payload);

    // "led_durumu" adlı değişkenin değerine göre LED'i aç veya kapat
    if (payload == "true") {
      digitalWrite(ledPin, HIGH);
      digitalWrite(ledPin2, LOW);
      Serial.println( payload);
    } else {
      digitalWrite(ledPin, LOW);
      digitalWrite(ledPin2, HIGH);
      Serial.println( payload);
    }
  } else {
    Serial.println("HTTP isteği başarısız.");
    Serial.println(httpCode);
  }

  // HTTP isteğini sonlandırma ve 5 saniye bekleyerek tekrarlama
  http.end();
  delay(10000);
}
