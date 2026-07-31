📝 Node.js & Express Not API (1-not-api)

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş, verilerini dosya tabanlı (notes.json) olarak saklayan basit ve etkili bir RESTful API uygulamasıdır.

🚀 Özellikler

RESTful Mimarisi: HTTP metotları (GET, POST, DELETE) ile tam uyumlu CRUD operasyonları.

Asenkron Dosya İşlemleri: Node.js fs/promises modülü ve async/await ile bloklamayan I/O yönetimi.

Dinamik Kimlik (ID): Date.now() ile otomatik üretilen benzersiz not kimlikleri.

🛠️ Kullanılan Teknolojiler

Node.js (JavaScript Çalıştırma Ortamı)

Express.js (Web Sunucu Framework'ü)

fs/promises (Asenkron Dosya Sistemi Yapılandırması)

📌 API Rotaları (Endpoints)

GET

/api/notes

Tüm notları listeler

-

POST

/api/notes

Yeni bir not ekler

{ "title": "Başlık", "content": "İçerik" }

DELETE

/api/notes/:id

Belirtilen ID'ye sahip notu siler

-

⚙️ Kurulum ve Çalıştırma

Proje klasörüne gidin:

cd 1-not-api


Gerekli bağımlılıkları yükleyin:

npm install


Sunucuyu başlatın:

node server.js


Sunucu varsayılan olarak http://localhost:3434 adresinde dinlemeye başlayacaktır.
