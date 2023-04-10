#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

const char* ssid = "seyit1";
const char* password2 = "seyityahya4324";
const char* serverAddress = "http://localhost:5000/api/auth/register";


void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password2);
  

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}

void loop() {
  // Örnek sensör verisi
  String name = "enes gücük";
  String email = "enes@gmail.com";
  String role = "admin";
  String password = "123456";

  // HTTP POST isteği oluştur
  WiFiClient wifiClient; 
  HTTPClient http;
  http.begin(wifiClient, serverAddress);
  http.addHeader("Content-Type", "application/json");

  String requestBody = String("{\"name\":") + String("\"") + name + String("\"") + String(",\"email\":") + String("\"") + email + String("\"") + String(",\"password\":") + String("\"") + password + String("\"") + String(",\"role\":") +String("\"") + role + String("\"") + String("}");
  int httpResponseCode = http.POST(requestBody);

  Serial.print("HTTP response code: ");
  Serial.println(httpResponseCode);

  http.end();

  delay(5000);
}
