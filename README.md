# İkinci El Psikoteknik Web Sitesi - Hugo

Bu proje Hugo static site generator kullanılarak oluşturulmuştur.

## Kurulum

Hugo'yu kurmak için:

### macOS
```bash
brew install hugo
```

### Linux
```bash
sudo apt-get install hugo
# veya
sudo yum install hugo
```

### Windows
[GitHub releases](https://github.com/gohugoio/hugo/releases) sayfasından indirebilirsiniz.

## Kullanım

### Geliştirme Sunucusunu Başlatma

```bash
hugo server
```

Site `http://localhost:1313` adresinde çalışacaktır.

### Siteyi Build Etme

```bash
hugo
```

Bu komut `public/` dizininde statik HTML dosyalarını oluşturur.

## Proje Yapısı

```
.
├── config.toml          # Hugo konfigürasyon dosyası
├── content/             # İçerik dosyaları (Markdown)
│   ├── _index.md       # Ana sayfa
│   ├── hakkimizda.md   # Hakkımızda sayfası
│   ├── urunler.md      # Ürünler sayfası
│   ├── sartname.md     # Şartname sayfası
│   └── iletisim.md     # İletişim sayfası
├── layouts/            # Template dosyaları
│   ├── _default/       # Varsayılan layoutlar
│   │   ├── baseof.html # Ana template
│   │   ├── index.html  # Ana sayfa template
│   │   └── single.html # Tekil sayfa template
│   ├── iletisim/       # İletişim sayfası özel template
│   ├── urunler/        # Ürünler sayfası özel template
│   └── partials/        # Parçalı template'ler
│       ├── header.html # Header
│       └── footer.html # Footer
├── static/             # Statik dosyalar (CSS, JS, images)
│   ├── css/
│   ├── js/
│   ├── images/
│   └── colaborate/
└── old/                # Eski HTML dosyaları (yedek)
```

## İçerik Düzenleme

İçerik dosyaları `content/` dizininde Markdown formatındadır. Her dosya front matter (YAML başlığı) içerir:

```markdown
---
title: "Sayfa Başlığı"
image: "/images/resim.jpg"
---

İçerik buraya...
```

## Konfigürasyon

Site ayarları `config.toml` dosyasında yapılır:
- Site başlığı
- İletişim bilgileri
- Menü yapısı
- Yandex Metrika ayarları

## Notlar

- Eski HTML dosyaları `old/` dizininde saklanmıştır
- Tüm statik dosyalar (CSS, JS, images) `static/` dizininde bulunur
- Hugo otomatik olarak bu dosyaları root URL'den servis eder

