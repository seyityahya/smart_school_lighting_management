#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

// WiFi bağlantısı
const char* ssid = "seyit1";
const char* password = "seyityahya4324";

// Aracı sunucu adresi
const char* serverName = "http://localhost:5000/api/ledAc";

// LED pin numarası
const int ledPin = 2;

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
}

void loop() {
  // HTTP isteği oluşturma
  HTTPClient http;
  http.begin(serverName);

  // HTTP isteği gönderme ve yanıtı alıp yazdırma
  int httpCode = http.GET();
  if (httpCode > 0) {
    String payload = http.getString();
    Serial.println(payload);

    // "led_durumu" adlı değişkenin değerine göre LED'i aç veya kapat
    if (payload == "true") {
      digitalWrite(ledPin, HIGH);
    } else {
      digitalWrite(ledPin, LOW);
    }
  } else {
    Serial.println("HTTP isteği başarısız.");
  }

  // HTTP isteğini sonlandırma ve 5 saniye bekleyerek tekrarlama
  http.end();
  delay(5000);
}
