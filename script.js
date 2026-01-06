const quizData = [
    // --- ÜNİTE 1: C# SOCKET & HTTP TEMELLERİ ---
    {
        question: "1. <code>new Socket(..., SocketType.Stream, ProtocolType.Tcp)</code> satırındaki <code>SocketType.Stream</code> neyi ifade eder?",
        a: "Verinin UDP protokolü ile gönderileceğini.",
        b: "Verinin IPv6 adreslerini kullanacağını.",
        c: "Verinin kesintisiz bir akış halinde, güvenilir ve sıralı (TCP) iletileceğini.",
        d: "Verinin şifreli (HTTPS) olarak iletileceğini.",
        correct: "c"
    },
    {
        question: "2. Sunucu tarafında kullanılan <code>IPAddress.Any</code> (veya 0.0.0.0) adresi ne anlama gelir?",
        a: "Sadece localhost üzerinden gelen bağlantıları kabul et.",
        b: "Sunucunun çalıştığı bilgisayardaki tüm ağ arayüzlerini dinle.",
        c: "Hiçbir bağlantıyı kabul etme.",
        d: "Sadece dış ağdan gelenleri kabul et.",
        correct: "b"
    },
    {
        question: "3. <code>socketServer.Listen(100)</code> komutundaki 100 sayısı teknik olarak neyi ifade eder?",
        a: "Maksimum kullanıcı sayısını.",
        b: "Saniyede işlenebilecek veri miktarını (KB).",
        c: "Accept edilene kadar kuyrukta (backlog) bekletilebilecek maksimum bağlantı isteği sayısını.",
        d: "Sunucunun açık kalacağı süreyi.",
        correct: "c"
    },
    {
        question: "4. HTTP protokolünde, 'Header' ile 'Body' kısmını birbirinden ayıran ayırıcı (delimiter) nedir?",
        a: "Tek bir boşluk karakteri",
        b: "\\n (Tek satır sonu)",
        c: "\\r\\n\\r\\n (Çift satır sonu / Boş bir satır)",
        d: "&lt;html&gt; etiketi",
        correct: "c"
    },
    {
        question: "5. Dosyanın tarayıcıda açılmayıp direkt indirilmesi (Download) için hangi Header kullanılır?",
        a: "Content-Disposition: inline",
        b: "Content-Type: text/html",
        c: "Content-Disposition: attachment",
        d: "Connection: keep-alive",
        correct: "c"
    },
    {
        question: "6. HTTP yanıtının ilk satırı (Status Line) hangisi olmalıdır?",
        a: "200 OK HTTP/1.1",
        b: "HTTP/1.1 200 OK",
        c: "GET / HTTP/1.1",
        d: "Content-Type: text/html",
        correct: "b"
    },
    {
        question: "7. Bir resim dosyasını (.jpg) istemciye gönderirken C# tarafında veriyi nasıl okuyup göndermeliyiz?",
        a: "File.ReadAllText ile string olarak okuyarak.",
        b: "File.ReadAllLines ile satır satır okuyarak.",
        c: "Resimler gönderilemez.",
        d: "File.ReadAllBytes ile byte dizisi (binary) olarak okuyarak.",
        correct: "d"
    },
    {
        question: "8. <code>socketServer.Accept()</code> metodu çalıştığında programın davranışı nasıldır?",
        a: "Arka planda çalışır, program durmaz.",
        b: "Program o satırda bloklanır (donar) ve bir istemci bağlanana kadar bekler.",
        c: "Hata fırlatır.",
        d: "Otomatik olarak 100 istemci oluşturur.",
        correct: "b"
    },
    {
        question: "9. HTML içinde Backend saati (C#) ve Frontend saati (JS) varsa, kullanıcı ne görür?",
        a: "İkisi de sunucu saatini gösterir.",
        b: "Backend sunucu saatini, Frontend kullanıcının cihaz saatini gösterir.",
        c: "İkisi de kullanıcının saatini gösterir.",
        d: "Backend saati sürekli değişir.",
        correct: "b"
    },
    {
        question: "10. Sunucuyu 'Sürekli Hizmet Veren' hale getirmek için hangi yapı kullanılır?",
        a: "socket.Close()",
        b: "Console.ReadKey()",
        c: "while(true) sonsuz döngüsü",
        d: "IPAddress.Loopback",
        correct: "c"
    },
    {
        question: "11. Sunucunun kilitlenmemesi ve aynı anda çok kişiye bakabilmesi (Multithreading) için ne kullanılır?",
        a: "Task.Run / Thread",
        b: "Daha hızlı derleyici",
        c: "Sıkıştırma algoritmaları",
        d: "Bellek temizleme",
        correct: "a"
    },
    {
        question: "12. StreamWriter kullanırken <code>sw.Flush()</code> metodunu çağırmazsak ne olur?",
        a: "Veriler anında gönderilir.",
        b: "Veriler tampon bellekte kalır, gitmeyebilir.",
        c: "Bağlantı kopar.",
        d: "Veriler şifrelenir.",
        correct: "b"
    },
    {
        question: "13. Java istemci kodunda <code>User-Agent</code> neden değiştirilir?",
        a: "Java'nın hızlanması için.",
        b: "İsteğin gerçek bir tarayıcıdan (Chrome) geldiğini taklit etmek (Spoofing) için.",
        c: "IP gizlemek için.",
        d: "UTF-8 yapmak için.",
        correct: "b"
    },
    
    // --- ÜNİTE 2: PYTHON CGI SUNUCUSU ---
    
    {
        question: "14. Python sunucusunda <code>CGIHTTPRequestHandler.cgi_directories = ['/cgi-bin']</code> satırı neden önemlidir?",
        a: "Sunucunun sadece bu klasördeki dosyaları 'program' olarak çalıştırıp, diğerlerini normal dosya gibi sunması (Güvenlik) için.",
        b: "HTML dosyalarının rengini değiştirmek için.",
        c: "Sunucunun daha hızlı çalışması için.",
        d: "Python'un yüklü olduğu yeri göstermek için.",
        correct: "a"
    },
    {
        question: "15. Python CGI scriptinde <code>form = cgi.FieldStorage()</code> komutu ne işe yarar?",
        a: "Veritabanına bağlanır.",
        b: "Sunucuyu kapatır.",
        c: "Hem GET hem de POST yöntemiyle gelen form verilerini alıp ayrıştırır (parse eder).",
        d: "Sadece resim dosyalarını okur.",
        correct: "c"
    },
    {
        question: "16. Bir CGI scripti çalıştırıldığında, Python kodunun çıktı olarak verdiği <b>İLK ŞEY</b> ne olmalıdır?",
        a: "Hello World yazısı",
        b: "Content-type: text/html başlığı ve ardından iki boş satır (\\n\\n)",
        c: "&lt;html&gt; etiketi",
        d: "Sunucu IP adresi",
        correct: "b"
    },
    {
        question: "17. <code>index.html</code> dosyasındaki Form 1 (GET) ile Form 2 (POST) arasındaki temel fark nedir?",
        a: "GET verileri URL'de parametre olarak (?name=x) gönderir, POST verileri gövdede (body) gizli gönderir.",
        b: "GET daha güvenlidir, POST daha hızlıdır.",
        c: "GET ile dosya yüklenir, POST ile yüklenmez.",
        d: "Hiçbir fark yoktur, ikisi de aynı çalışır.",
        correct: "a"
    },
    {
        question: "18. Python scriptindeki <code>if form.headers.__contains__('content-length'):</code> kontrolü genellikle hangi istek türü için anlamlıdır?",
        a: "GET istekleri",
        b: "POST istekleri (Gövdedeki veri boyutunu anlamak için)",
        c: "DELETE istekleri",
        d: "HEAD istekleri",
        correct: "b"
    },
    {
        question: "19. HTML dosyasındaki <code>&lt;meta http-equiv='refresh' content='5'&gt;</code> satırı ne yapar?",
        a: "Sunucuyu her 5 saniyede bir yeniden başlatır.",
        b: "Tarayıcının sayfayı her 5 saniyede bir otomatik yenilemesini (Client-side Refresh) sağlar.",
        c: "Sayfanın 5 saniye sonra kapanmasını sağlar.",
        d: "Python scriptini 5 kere çalıştırır.",
        correct: "b"
    },
    {
        question: "20. Python CGI scriptinin en başında yer alan <code>#!/usr/bin/env python</code> (Shebang) satırı ne işe yarar?",
        a: "Kodun sadece Windows'ta çalışmasını sağlar.",
        b: "İşletim sistemine bu dosyanın hangi yorumlayıcı (Python) ile çalıştırılacağını söyler.",
        c: "Kütüphaneleri import eder.",
        d: "HTML çıktısını güzelleştirir.",
        correct: "b"
    },

    // --- ÜNİTE 3: PYTHON FLASK & WSGI ---

    {
        question: "21. Flask uygulamasını başlatan <code>app = Flask(__name__)</code> satırındaki <code>__name__</code> neyi belirtir?",
        a: "Veritabanı adını.",
        b: "Kullanıcı adını.",
        c: "Mevcut modülün adını, Flask'ın kök dizini bulması için gereklidir.",
        d: "Sunucunun IP adresini.",
        correct: "c"
    },
    {
        question: "22. <code>@app.route('/')</code> dekoratörü ne işe yarar?",
        a: "Sunucuyu kapatır.",
        b: "Belirtilen URL (/) ile hemen altındaki fonksiyonu eşleştirir (Routing).",
        c: "HTML dosyasını siler.",
        d: "Hata ayıklama modunu açar.",
        correct: "b"
    },
    {
        question: "23. Flask'ta <code>@app.route('/<name>')</code> tanımı ne anlama gelir?",
        a: "name klasöründeki dosyaları listeler.",
        b: "URL'in o kısmına gelen değeri 'name' adıyla fonksiyona parametre olarak geçirir (Dinamik URL).",
        c: "Sadece 'name' ismindeki kullanıcılar girebilir.",
        d: "Bu bir HTML etiketi hatasıdır.",
        correct: "b"
    },
    {
        question: "24. Bir formdan <b>POST</b> yöntemiyle gelen veriyi okumak için Flask'ta hangisi kullanılır?",
        a: "request.args['key']",
        b: "request.form['key']",
        c: "request.url",
        d: "request.get()",
        correct: "b"
    },
    {
        question: "25. URL üzerinden gelen parametreleri (Örn: <code>?a=5&b=3</code> - <b>GET</b> isteği) okumak için hangisi kullanılır?",
        a: "request.form",
        b: "request.data",
        c: "request.args",
        d: "request.cookies",
        correct: "c"
    },
    {
        question: "26. <code>redirect(url_for('success', name=user))</code> komutu ne yapar?",
        a: "Kullanıcıyı 'success' fonksiyonunun bağlı olduğu URL'e yönlendirir.",
        b: "Sayfayı yeniler.",
        c: "success.html dosyasını indirir.",
        d: "Veritabanına kayıt yapar.",
        correct: "a"
    },
    {
        question: "27. <code>app.send_static_file('index.html')</code> metodu ne işe yarar?",
        a: "index.html dosyasını siler.",
        b: "'static' klasöründeki index.html dosyasını istemciye gönderir.",
        c: "HTML dosyasını Python koduna çevirir.",
        d: "Dinamik bir şablon oluşturur.",
        correct: "b"
    },
    {
        question: "28. Flask'ta Türkçe karakter sorununu çözmek için <code>make_response</code> kullanılarak hangi başlık ayarlanmalıdır?",
        a: "Content-Length: 0",
        b: "Connection: close",
        c: "Content-Type: text/plain; charset=utf-8",
        d: "Server: Flask",
        correct: "c"
    },
    {
        question: "29. <code>app.run(host='0.0.0.0', debug=True)</code> satırındaki <code>debug=True</code> ne sağlar?",
        a: "Sadece adminlerin girmesini sağlar.",
        b: "Sunucuyu hızlandırır.",
        c: "Kodda değişiklik yapıldığında sunucuyu otomatik yeniden başlatır ve hataları tarayıcıda gösterir.",
        d: "Log kayıtlarını kapatır.",
        correct: "c"
    },
    {
        question: "30. Flask'ta <code>render_template('index.html', name='Ali')</code> fonksiyonunun temel amacı nedir?",
        a: "Statik dosyayı olduğu gibi göndermek.",
        b: "Veritabanı bağlantısı kurmak.",
        c: "HTML şablonunun (Jinja2) içindeki değişkenleri ({{ name }}) doldurarak dinamik HTML üretmek.",
        d: "Kullanıcıyı başka siteye yönlendirmek.",
        correct: "c"
    },

    // --- ÜNİTE 4: PHP AJAX & ASENKRON PROGRAMLAMA ---

    {
        question: "31. Klasik yöntemde bir AJAX isteği başlatmak için hangi nesne kullanılır?",
        a: "new HTTPClient()",
        b: "new XMLHttpRequest()",
        c: "new Socket()",
        d: "new ServerRequest()",
        correct: "b"
    },
    {
        question: "32. Bir AJAX isteğinin başarıyla tamamlandığını (HTTP 200 OK ve Bitti) anlamak için hangi kontrol yapılır?",
        a: "xhr.status === 404",
        b: "xhr.readyState === 1",
        c: "xhr.status === 200 && xhr.readyState === 4 (DONE)",
        d: "xhr.responseText === 'OK'",
        correct: "c"
    },
    {
        question: "33. Modern Javascript'te kullanılan <code>fetch('url')</code> fonksiyonu geriye ne döner?",
        a: "Doğrudan HTML içeriği",
        b: "Bir Promise (Söz)",
        c: "XML dosyası",
        d: "Hata mesajı",
        correct: "b"
    },
    {
        question: "34. <code>async function</code> içinde kullanılan <code>await</code> anahtar kelimesi ne işe yarar?",
        a: "İşlemi iptal eder.",
        b: "Asenkron bir işlemin (Promise) bitmesini bekler, kodun o satırda duraklamasını sağlar.",
        c: "Sunucuyu yeniden başlatır.",
        d: "Sayfayı yeniler.",
        correct: "b"
    },
    {
        question: "35. AJAX ile dosya yüklemek veya form verisi göndermek için hangi nesne en uygundur?",
        a: "JSON.stringify()",
        b: "new FormData()",
        c: "new String()",
        d: "document.getElementById()",
        correct: "b"
    },
    {
        question: "36. AJAX ile dosya yüklerken, yükleme yüzdesini (Progress Bar) takip etmek için hangi olay (event) kullanılır?",
        a: "xhr.onload",
        b: "xhr.onerror",
        c: "xhr.upload.onprogress",
        d: "window.onclick",
        correct: "c"
    },
    {
        question: "37. Bir AJAX isteği GET yöntemiyle yapılıyorsa, parametreler nereye eklenir?",
        a: "Send fonksiyonunun içine: xhr.send(params)",
        b: "HTTP Header'ına",
        c: "URL'in sonuna: url?a=1&b=2",
        d: "Hiçbir yere, GET ile parametre gönderilemez.",
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultBox = document.getElementById('result');

// Soruları Ekrana Basma Fonksiyonu
function loadQuiz() {
    quizContainer.innerHTML = ""; // Önceki içeriği temizle
    quizData.forEach((data, index) => {
        const card = document.createElement('div');
        card.classList.add('question-card');

        card.innerHTML = `
            <div class="question-title">${data.question}</div>
            <div class="options">
                <label id="q${index}_a_label">
                    <input type="radio" name="q${index}" value="a"> ${data.a}
                </label>
                <label id="q${index}_b_label">
                    <input type="radio" name="q${index}" value="b"> ${data.b}
                </label>
                <label id="q${index}_c_label">
                    <input type="radio" name="q${index}" value="c"> ${data.c}
                </label>
                <label id="q${index}_d_label">
                    <input type="radio" name="q${index}" value="d"> ${data.d}
                </label>
            </div>
        `;
        quizContainer.appendChild(card);
    });
}

// Sonuçları Kontrol Etme Fonksiyonu
function submitQuiz() {
    let score = 0;
    
    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        const labels = {
            a: document.getElementById(`q${index}_a_label`),
            b: document.getElementById(`q${index}_b_label`),
            c: document.getElementById(`q${index}_c_label`),
            d: document.getElementById(`q${index}_d_label`)
        };

        // Önceki stilleri temizle
        for (let key in labels) {
            labels[key].classList.remove('correct', 'incorrect');
        }

        if (selectedOption) {
            if (selectedOption.value === data.correct) {
                score++;
                labels[selectedOption.value].classList.add('correct');
            } else {
                labels[selectedOption.value].classList.add('incorrect');
                labels[data.correct].classList.add('correct'); // Doğruyu da göster
            }
        } else {
            // Hiçbir şey seçilmediyse doğru cevabı göster
             labels[data.correct].classList.add('correct');
        }
    });

    // Sonucu göster
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `Sonuç: ${quizData.length} sorudan ${score} doğru yaptınız!`;
    
    // Sayfanın en altına kaydır
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// Sayfa yüklenince testi başlat
loadQuiz();
