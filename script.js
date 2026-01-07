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
    },

    // --- ÜNİTE 5: C# BASIC HTTP SERVER (MANUEL) ---
    {
        question: "38. C# kodundaki <code>stream.Read(rBuf, 0, rBuf.Length)</code> metodu geriye ne döner?",
        a: "Okunan verinin kendisini (string)",
        b: "Hata kodunu",
        c: "Okunan bayt sayısını (int)",
        d: "Dosya yolunu",
        correct: "c"
    },
    {
        question: "39. <code>HttpUtility.UrlDecode(readContent)</code> komutu neden kullanılır?",
        a: "Şifreli veriyi çözmek için.",
        b: "URL'deki %20 gibi kodlanmış karakterleri (boşluk vb.) normale çevirmek için.",
        c: "HTML etiketlerini temizlemek için.",
        d: "Veriyi veritabanına kaydetmek için.",
        correct: "b"
    },
    {
        question: "40. Bu kodda gelen isteğin GET mi yoksa POST mu olduğunu anlamak için neye bakılıyor?",
        a: "Sadece URL uzunluğuna.",
        b: "İçerikte 'Content-Length' başlığının olup olmamasına (Varsa body içerir).",
        c: "Tarayıcı ismine.",
        d: "Saat bilgisine.",
        correct: "b"
    },
    {
        question: "41. Manuel bir HTTP sunucusunda, Request (İstek) başlıkları ile Body (Gövde) arasındaki sınır nedir?",
        a: "Content-Type satırı",
        b: "Boş bir satır (\\r\\n\\r\\n)",
        c: "&lt;body&gt; etiketi",
        d: "GET kelimesi",
        correct: "b"
    },
    {
        question: "42. <code>new DataTable().Compute(expression, null)</code> satırı bu kodda ne amaçla kullanılmıştır?",
        a: "Veritabanı bağlantısı kurmak için.",
        b: "Tablo oluşturmak için.",
        c: "String halindeki matematiksel ifadeyi (Örn: '5+10') hesaplamak için.",
        d: "Tarih bilgisini almak için.",
        correct: "c"
    },
    {
        question: "43. Sunucunun yanıt gönderirken <code>Content-Type</code> ve <code>Connection: close</code> gibi başlıkları manuel olarak string içine yazmasının sebebi nedir?",
        a: "Daha hızlı çalışması için.",
        b: "HTTP protokolüne uygun, tarayıcının anlayabileceği geçerli bir yanıt oluşturmak için.",
        c: "Kodun daha kısa olması için.",
        d: "Güvenlik açığı oluşturmak için.",
        correct: "b"
    },

    // --- ÜNİTE 6: JAVASCRIPT & GENEL WEB TEKNOLOJİLERİ ---
    {
        question: "44. JavaScript hangi HTML etiketinin içine konulur?",
        a: "&lt;js&gt;",
        b: "&lt;JavaScript&gt;",
        c: "&lt;script&gt;",
        d: "&lt;scripting&gt;",
        correct: "c"
    },
    {
        question: "45. Aşağıdaki HTML öğesinin içeriğini değiştirmek için doğru JavaScript sözdizimi nedir? <code>&lt;p id='demo'&gt;Bu bir gösteridir.&lt;/p&gt;</code>",
        a: "document.getElement('p').innerHTML = 'Hello World!';",
        b: "#demo.innerHTML = 'Hello World!';",
        c: "document.getElementByName('p').innerHTML = 'Hello World!';",
        d: "document.getElementById('demo').innerHTML = 'Hello World!';",
        correct: "d"
    },
    {
        question: "46. 'file.js' adlı harici bir komut dosyasına başvurmak için doğru sözdizimi nedir?",
        a: "&lt;script href='file.js'&gt;",
        b: "&lt;script src='file.js'&gt;",
        c: "&lt;script name='file.js'&gt;",
        d: "&lt;script target='file.js'&gt;",
        correct: "b"
    },
    {
        question: "47. JavaScript'te nasıl fonksiyon (yöntem) oluşturursunuz?",
        a: "function = myFunction(){ }",
        b: "function:myFunction(){ }",
        c: "function myFunction(){ }",
        d: "int function myFunction(){ return;}",
        correct: "c"
    },
    {
        question: "48. Aşağıdakilerden hangisi JavaScript kodu açıklamasıdır?",
        a: "(comment)",
        b: "/* comment */",
        c: "#comment",
        d: "&lt;!-- comment --&gt;",
        correct: "b"
    },
    {
        question: "49. Bir değiştirilebilir JavaScript değişkeni tanımlanması ne biçimde olmalıdır (önerilir)?",
        a: "int x;",
        b: "var x;",
        c: "let x;",
        d: "const x;",
        correct: "c"
    },
    {
        question: "50. Aşağıdakilerden hangisi JavaScript kodu oluşturma yöntemlerinden değildir?",
        a: "inline",
        b: "internal",
        c: "external",
        d: "direct",
        correct: "d"
    },
    {
        question: "51. Aşağıdakilerden hangisi JavaScript kodlarında dialog kutusu açan fonksiyondur?",
        a: "put",
        b: "alert",
        c: "msgBox",
        d: "window",
        correct: "b"
    },
    {
        question: "52. Aşağıdakilerden hangisi JavaScript veri tipi olamaz?",
        a: "String",
        b: "Object",
        c: "Char",
        d: "Boolean",
        correct: "c"
    },
    {
        question: "53. Aşağıdakilerden hangisi JavaScript giriş dialog penceresidir?",
        a: "alert(...)",
        b: "confirm(...)",
        c: "prompt(...)",
        d: "console.info(...)",
        correct: "c"
    },
    {
        question: "54. Html JavaScript programlama dilinde tekrarlanır bir zamanlayıcı kuran fonksiyon aşağıdakilerden hangisidir?",
        a: "addEventListener(millisecond, function)",
        b: "clearTimeout()",
        c: "setInterval(function, milliseconds)",
        d: "setTimeout(function, milliseconds)",
        correct: "c"
    },
    {
        question: "55. Bir tarayıcı içinde bir element odağı kaybettiğinde hangi olay meydana gelir?",
        a: "onmouseout",
        b: "onblur",
        c: "onmouseleave",
        d: "onchange",
        correct: "b"
    },
    {
        question: "56. Bir tarayıcı sayfasında herhangi bir konumda açılır pencere menüsünü yönetmek için hangi olay kullanılır?",
        a: "oncontextmenu",
        b: "onclick",
        c: "onmousedown",
        d: "onblur",
        correct: "a"
    },
    {
        question: "57. Html JavaScript programlama dilinde aşağıdakilerden hangisi bir nesne tanımlamasıdır?",
        a: "{'N1':'V1', N2:2}",
        b: "{N1:'V1', N2:2}",
        c: "[{N1:'V1', N2:2}]",
        d: "{N1='V1', N=2}",
        correct: "b"
    },
    {
        question: "58. Html JavaScript programlama dilinde tanımlayıcısı msg olan bir div elementinin click olayına func adlı fonksiyon aşağıdakilerden hangisinde doğru atanmıştır?",
        a: "&lt;div id='msg' onclick='func()'&gt; &lt;/div&gt;",
        b: "&lt;div id='msg' onclick='func'&gt; &lt;/div&gt;",
        c: "document.getElementById('msg').onclick=func();",
        d: "document.getElementById('msg').addEventListener('click', func());",
        correct: "a"
    },
    {
        question: "59. Html JavaScript programlama dilinde sayfa içindeki aynı türde html elementleri bir dizi halinde döndüren fonksiyon aşağıdakilerden hangisidir?",
        a: "getElementsByClassName",
        b: "getElementsByTagName",
        c: "getElementsByName",
        d: "getElementById",
        correct: "b"
    },
    {
        question: "60. Aşağıdakilerden hangisi inline script örneğidir?",
        a: "&lt;head&gt; &lt;script&gt;console.info('Hee'); &lt;/script&gt; &lt;/head&gt;",
        b: "&lt;head&gt; &lt;script src='s1.js'&gt; &lt;/script&gt; &lt;/head&gt;",
        c: "&lt;body onload=\"alert('Hee');\"&gt; &lt;/body&gt;",
        d: "&lt;body&gt; &lt;script&gt;console.info('Hee'); &lt;/script&gt; &lt;/body&gt;",
        correct: "c"
    },
    {
        question: "61. Aşağıdakilerden hangisi external script örneğidir?",
        a: "&lt;head&gt; &lt;script&gt;console.info('Hee'); &lt;/script&gt; &lt;/head&gt;",
        b: "&lt;head&gt; &lt;script src='s1.js'&gt; &lt;/script&gt; &lt;/head&gt;",
        c: "&lt;body onload=\"alert('Hee');\"&gt; &lt;/body&gt;",
        d: "&lt;body&gt; &lt;script&gt;console.info('Hee'); &lt;/script&gt; &lt;/body&gt;",
        correct: "b"
    },
    {
        question: "62. Aşağıdakilerden hangisi kod ile script oluşturmada kullanılmaz?",
        a: "document.head.appendChild(scriptobject)",
        b: "scriptobject.text=\"alert('Hee')\"",
        c: "document.getElementById(scriptobject)",
        d: "document.createElement(...)",
        correct: "c"
    },
    {
        question: "63. Aşağıdakilerden hangisi external script örneğidir? (Soru kökü muhtemelen JS komutunu soruyor)",
        a: "console.debug(...)",
        b: "typeof(…)",
        c: "confirm(...)",
        d: "eval(...)",
        correct: "d"
    },
    {
        question: "64. Aşağıdakilerden hangisi python basit http server modulünü çalıştırmak için kullanılan komut satırıdır?",
        a: "python.exe -m httpServer 80",
        b: "python.exe -m server 80",
        c: "python.exe -m http.server 80",
        d: "python.exe -m http 80",
        correct: "c"
    },
    {
        question: "65. Aşağıdaki JavaScript kodlarından hangisinin yanıtı hatalıdır? (Beklenen çıktı ile kod)",
        a: "let a = 0.2 + 0.1; let b = a == 0.3; //sonuç: b=true (Hata: Floating point hassasiyetinden dolayı false çıkar)",
        b: "let a = '100'; let b = '10'; let c = a / b; //sonuç: c=10",
        c: "let a = '10'; let b = 20; let c = a + b; //sonuç: c=1020",
        d: "let a = NaN; let b = '5'; let c = a + b; //sonuç: c=NaN5",
        correct: "a"
    },
    {
        question: "66. Aşağıdakilerden hangisi JavaScript dilinde bir değişkenin veri tipini döndürür?",
        a: "type",
        b: "typeof",
        c: "classof",
        d: "valueof",
        correct: "b"
    },
    {
        question: "67. Aşağıdakilerden hangisi JavaScript dilinde Number tipinde bir değer değildir?",
        a: "NaN",
        b: "Infinity",
        c: "\"16\".toString(2)",
        d: "Number(\"2\")",
        correct: "c"
    },
    {
        question: "68. Aşağıdakilerden hangisi JavaScript dilinde çeşitli geometrik şekiller çizdirilmesi için kullanılan tag dır?",
        a: "Canvas",
        b: "Ploty",
        c: "Chart",
        d: "D3",
        correct: "a"
    },
    {
        question: "69. Aşağıdakilerden hangisi JavaScript dilinde Window nesnesinin bir özelliği değildir?",
        a: "screen",
        b: "location",
        c: "history",
        d: "cookie",
        correct: "d"
    },
    {
        question: "70. Aşağıdakilerden hangisi JavaScript dilinde sayfayı yönlendirmede (redirect) kullanılan özelliktir?",
        a: "location.href",
        b: "location.hostname",
        c: "location.pathname",
        d: "location.assign",
        correct: "a"
    },
    {
        question: "71. Aşağıdakilerden hangisi JavaScript dilinde BigInt türü standart olarak kaç bit kullanır?",
        a: "64",
        b: "63",
        c: "53",
        d: "32",
        correct: "c"
    },
    {
        question: "72. Aşağıdakilerden hangisi JavaScript dilinde: <code>let a; alert(a);</code> alert metin olarak ne gösterir?",
        a: "NaN",
        b: "Undefined",
        c: "Null",
        d: "Object",
        correct: "b"
    },
    {
        question: "73. Aşağıdakilerden hangisi JavaScript dilinde x adlı değişken BigInt türünde değildir?",
        a: "let x = BigInt('9');",
        b: "let x = 5; x = 5n;",
        c: "let x = 5n;",
        d: "let x= Number(9007199254740995);",
        correct: "d"
    },
    {
        question: "74. Html JavaScript programlama dilinde hangi kod istisna (exception) meydana getirmez?",
        a: "const x = [1,2]; x = 5;",
        b: "let x = 5n /2;",
        c: "const x = []; x = [];",
        d: "let x = [1,2]; x = '5';",
        correct: "d"
    },
    {
        question: "75. Html JavaScript programlama dilinde coğrafi konum bilgilerine hangi özellikten erişilir?",
        a: "window.location",
        b: "navigator.geolocation",
        c: "MediaDevices.arguments",
        d: "window.localStorage",
        correct: "b"
    },
    {
        question: "76. Regular Expression (düzenli ifadeler) hangi kod/metin editörü içinde kullanılamaz?",
        a: "Notepad",
        b: "Ms Word",
        c: "Ms Visual Studio",
        d: "VS Code",
        correct: "a"
    },
    {
        question: "77. Hangisi 'Frontend' teknoljisi değildir?",
        a: "jQuery",
        b: "Bootstrap",
        c: "PHP",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "78. Hangisi 'Backend' teknoljisi değildir?",
        a: "ASP.Net",
        b: "JSP",
        c: "Flask",
        d: "RWD",
        correct: "d"
    },
    {
        question: "79. Hangisi 'Frontend' teknoljisi değildir?",
        a: "React",
        b: "Razor",
        c: "Vue",
        d: "Angular",
        correct: "b"
    },
    {
        question: "80. JavaScript'in tip güvenli üst kümesi olan programlama dili hangisidir?",
        a: "TypeScript",
        b: "JavaScript",
        c: "C#",
        d: "Java",
        correct: "a"
    },
    {
        question: "81. Hangi İlişkisel veri tabanı lisansız ticari kullanıma izin verir?",
        a: "Oracle",
        b: "Ms SQL",
        c: "PostgreSQL",
        d: "MySQL",
        correct: "c"
    },
    {
        question: "82. Web tarayıcısı JavaScript kodlarını hangi yöntem aracılığıyla yükleyemez?",
        a: "HTML içinden",
        b: "Consol penceresinden",
        c: "Watch penceresinden",
        d: "CSS dosyasından",
        correct: "d"
    },
    {
        question: "83. Aşağıdaki javascript döngülerinden hangisi hatalıdır?",
        a: "for (let v of [1,2]) { }",
        b: "for (let v in {a:1,b:2}) { }",
        c: "for (let v; ; v++) { }",
        d: "do { } for (v++ < 5",
        correct: "d"
    },

    // --- ÜNİTE 7: PHP TEMELLERİ & W3SCHOOLS DETAYLARI (TRICKY) ---
    {
        question: "84. PHP'de değişken isimleri ile ilgili aşağıdakilerden hangisi <b>YANLIŞTIR</b>?",
        a: "Değişkenler $ işareti ile başlar.",
        b: "Değişken isimleri bir rakamla başlayabilir. (Örn: $1var)",
        c: "Değişken isimleri büyük/küçük harf duyarlıdır ($x ile $X farklıdır).",
        d: "Değişken isimlerinde yalnızca alfanümerik karakterler ve alt çizgi (A-z, 0-9, _) kullanılabilir.",
        correct: "b"
    },
    {
        question: "85. PHP sözdiziminde (Syntax) aşağıdakilerden hangisi büyük/küçük harf duyarlı (Case-Sensitive) <b>DEĞİLDİR</b>?",
        a: "Değişken isimleri ($color)",
        b: "Sabitler (define ile tanımlananlar)",
        c: "Dizi anahtarları (Array keys)",
        d: "Anahtar kelimeler (if, else, while, echo) ve kullanıcı tanımlı fonksiyon isimleri",
        correct: "d"
    },
    {
        question: "86. Aşağıdaki kod bloğunun çıktısı ne olur?<br><code>$x = 5; function test() { echo $x; } test();</code>",
        a: "5",
        b: "0",
        c: "Hata verir (Undefined variable $x) çünkü global değişkenlere fonksiyon içinden doğrudan erişilemez.",
        d: "Null",
        correct: "c"
    },
    {
        question: "87. Bir fonksiyon içinde global bir değişkene erişmek ve onu değiştirmek için hangi anahtar kelime kullanılır?",
        a: "static",
        b: "public",
        c: "global",
        d: "extern",
        correct: "c"
    },
    {
        question: "88. <code>static</code> anahtar kelimesi ile tanımlanan bir yerel değişkenin özelliği nedir?",
        a: "Sadece fonksiyon dışında kullanılabilir.",
        b: "Fonksiyon her çağrıldığında değeri sıfırlanır.",
        c: "Fonksiyon çalışmayı bitirse bile değişken silinmez, son değerini hafızada tutar.",
        d: "Sabit (constant) gibi davranır, değeri değiştirilemez.",
        correct: "c"
    },
    {
        question: "89. <code>echo</code> ve <code>print</code> arasındaki teknik farklardan biri nedir?",
        a: "echo daha yavaştır.",
        b: "print birden fazla parametre alabilir.",
        c: "echo geriye değer döndürmez (void), print işlemin sonucunda her zaman 1 döndürür.",
        d: "print HTML etiketlerini yazdıramaz.",
        correct: "c"
    },
    {
        question: "90. PHP'de <code>var_dump($x)</code> fonksiyonu ne işe yarar?",
        a: "Değişkeni siler.",
        b: "Değişkenin değerini ve veri tipini (uzunluğuyla birlikte) ekrana basar.",
        c: "Değişkeni veritabanına kaydeder.",
        d: "Değişkenin ismini değiştirir.",
        correct: "b"
    },
    {
        question: "91. Aşağıdaki string tanımlamalarından hangisinde değişkenin değeri <b>YAZILMAZ</b> (yorumlanmaz), değişken ismi olduğu gibi ($x) ekrana çıkar?",
        a: "echo \"Değer: $x\"; (Çift Tırnak)",
        b: "echo 'Değer: $x'; (Tek Tırnak)",
        c: "echo $x;",
        d: "echo \"$x\";",
        correct: "b"
    },
    {
        question: "92. PHP'de bir stringin uzunluğunu bayt cinsinden döndüren fonksiyon hangisidir?",
        a: "str_word_count()",
        b: "strlen()",
        c: "count()",
        d: "strpos()",
        correct: "b"
    },
    {
        question: "93. <code>strpos('Merhaba', 'M')</code> fonksiyonu ne döndürür? (Dikkat: Tuzak Soru)",
        a: "1",
        b: "true",
        c: "0",
        d: "M",
        correct: "c"
    },
    {
        question: "94. PHP'de bir stringi büyük harfe çevirmek için hangi fonksiyon kullanılır?",
        a: "strtolower()",
        b: "ucwords()",
        c: "strtoupper()",
        d: "uppercase()",
        correct: "c"
    },
    {
        question: "95. <code>$x = 'Hello World'; $y = explode(' ', $x);</code> işleminden sonra $y değişkeninin tipi ne olur?",
        a: "String",
        b: "Integer",
        c: "Array (Dizi)",
        d: "Object",
        correct: "c"
    },
    {
        question: "96. İki string ifadeyi birleştirmek (Concatenation) için hangi operatör kullanılır?",
        a: "+ (Artı)",
        b: ". (Nokta)",
        c: "& (Ve işareti)",
        d: ", (Virgül)",
        correct: "b"
    },
    {
        question: "97. Aşağıdaki kodun çıktısı nedir?<br><code>$x = '5' + 10; echo $x;</code>",
        a: "510",
        b: "5+10",
        c: "15 (PHP stringi otomatik sayıya çevirir)",
        d: "Hata verir (Type Error)",
        correct: "c"
    },
    {
        question: "98. PHP'de 'String Slicing' (Kesme) işlemi için kullanılan, negatif indeks de kabul eden fonksiyon hangisidir?",
        a: "slice()",
        b: "str_split()",
        c: "substr()",
        d: "trim()",
        correct: "c"
    },
    {
        question: "99. PHP'de <code>PHP_INT_MAX</code> sabiti neyi ifade eder?",
        a: "PHP sürüm numarasını.",
        b: "O sistemde desteklenen en büyük tamsayı (integer) değerini.",
        c: "Maksimum dosya yükleme boyutunu.",
        d: "Maksimum değişken sayısını.",
        correct: "b"
    },
    {
        question: "100. <code>is_numeric()</code> fonksiyonu aşağıdaki hangi durumda <b>false</b> döner?",
        a: "is_numeric(59.85)",
        b: "is_numeric('59.85')",
        c: "is_numeric('100')",
        d: "is_numeric('100Hello')",
        correct: "d"
    },
    {
        question: "101. Ondalıklı bir sayıyı (Float) tamsayıya (Int) dönüştürdüğümüzde (Casting) aşağıdakilerden hangisi gerçekleşir? (Örn: (int)20.9)",
        a: "Sayı en yakın tamsayıya yuvarlanır (21 olur).",
        b: "Sayı yukarı yuvarlanır.",
        c: "Ondalık kısım tamamen atılır (20 olur).",
        d: "Hata verir.",
        correct: "c"
    },
    {
        question: "102. <code>pi()</code> fonksiyonu ne döndürür?",
        a: "3.14",
        b: "3.14159...",
        c: "Dairenin alanını",
        d: "Rastgele bir sayı",
        correct: "b"
    },
    {
        question: "103. 10 ile 100 arasında (sınırlar dahil) rastgele bir sayı üretmek için hangi fonksiyon kullanılır?",
        a: "rnd(10, 100)",
        b: "random(10, 100)",
        c: "rand(10, 100)",
        d: "Math.random(10, 100)",
        correct: "c"
    },
    {
        question: "104. <code>define('GREETING', 'Welcome');</code> ile oluşturulan sabitlere (Constant) nasıl erişilir?",
        a: "$GREETING",
        b: "GREETING",
        c: "constant('GREETING')",
        d: "define.GREETING",
        correct: "b"
    },
    {
        question: "105. <code>const</code> anahtar kelimesi ile <code>define()</code> arasındaki temel farklardan biri nedir?",
        a: "const ile oluşturulanlar büyük/küçük harf duyarlı değildir.",
        b: "const sadece fonksiyon içinde kullanılabilir.",
        c: "const derleme zamanında (compile-time) tanımlanır, define ise çalışma zamanında (runtime) tanımlanır.",
        d: "Hiçbir fark yoktur.",
        correct: "c"
    },
    {
        question: "106. Aşağıdaki 'Sihirli Sabitlerden' (Magic Constants) hangisi dosyanın tam yolunu verir?",
        a: "__LINE__",
        b: "__DIR__",
        c: "__FILE__",
        d: "__FUNCTION__",
        correct: "c"
    },
    {
        question: "107. <code>__LINE__</code> sihirli sabiti ne döndürür?",
        a: "Dosyadaki toplam satır sayısını.",
        b: "O anki kodun bulunduğu satır numarasını.",
        c: "Bir alt satırı.",
        d: "Çizgi karakterini.",
        correct: "b"
    },
    {
        question: "108. PHP'de <code>**</code> operatörü (Örn: <code>$x ** $y</code>) ne işlem yapar?",
        a: "Çarpma",
        b: "Üs alma (Exponentiation)",
        c: "Mod alma",
        d: "Karekök alma",
        correct: "b"
    },
    {
        question: "109. 'Eşitlik' (<code>==</code>) ve 'Özdeşlik' (<code>===</code>) operatörleri arasındaki fark nedir?",
        a: "== hem değeri hem tipi kontrol eder.",
        b: "=== sadece değeri kontrol eder.",
        c: "== değerlerin eşitliğine bakar (tip dönüşümü yapar), === hem değerin hem de veri tipinin aynılığına bakar.",
        d: "Bir fark yoktur.",
        correct: "c"
    },
    {
        question: "110. PHP 7 ile gelen 'Uzay Gemisi' (Spaceship) operatörü <code><=></code> ne döndürür?",
        a: "Her zaman true veya false.",
        b: "Sol taraf küçükse -1, eşitse 0, büyükse 1 değerini döndürür.",
        c: "Uzay boşluğu karakteri döndürür.",
        d: "İki değişkeni yer değiştirir.",
        correct: "b"
    },
    {
        question: "111. Aşağıdaki mantıksal operatörlerden hangisi 'VEYA' (OR) işlemi için kullanılmaz?",
        a: "or",
        b: "||",
        c: "xor",
        d: "Hiçbiri (hepsi kullanılır)",
        correct: "c"
    },
    {
        question: "112. <code>$x = 10; echo ++$x;</code> kodunun çıktısı nedir?",
        a: "10 (Önce yazdırır sonra artırır)",
        b: "11 (Önce artırır sonra yazdırır)",
        c: "Hata verir",
        d: "12",
        correct: "b"
    },
    {
        question: "113. <code>$x = 10; echo $x++;</code> kodunun çıktısı nedir?",
        a: "10 (Önce değişkeni döndürür, sonra bellekte artırır)",
        b: "11",
        c: "Hata verir",
        d: "9",
        correct: "a"
    },
    {
        question: "114. <code>and</code> operatörü ile <code>&&</code> operatörü arasındaki fark nedir?",
        a: "İşlevleri farklıdır.",
        b: "İşlevleri aynıdır ancak <code>&&</code> operatörünün önceliği (precedence) <code>and</code> operatöründen yüksektir.",
        c: "<code>and</code> sadece if içinde kullanılır.",
        d: "<code>&&</code> sadece while içinde kullanılır.",
        correct: "b"
    },
    {
        question: "115. PHP'de 'String Operators' olarak kullanılan atama operatörü hangisidir?",
        a: "+=",
        b: ".=",
        c: "&=",
        d: "*=",
        correct: "b"
    },
    {
        question: "116. Kısa if/else yapısı (Ternary Operator) hangisidir?",
        a: "if ? true : false",
        b: "(koşul) ? doğru : yanlış",
        c: "(koşul) : doğru ? yanlış",
        d: "koşul ?? doğru :: yanlış",
        correct: "b"
    },
    {
        question: "117. PHP 7 ile gelen 'Null Coalescing' operatörü <code>??</code> ne işe yarar?",
        a: "Değişken null ise hata verir.",
        b: "İlk işlenen (operand) mevcutsa ve null değilse onu döndürür, aksi halde ikinci işleneni döndürür.",
        c: "İki değişkeni toplar.",
        d: "Değişkenin tipini null yapar.",
        correct: "b"
    },
    {
        question: "118. <code>if...elseif...else</code> yapısında, <code>elseif</code> kelimesi bitişik mi yoksa ayrı mı (<code>else if</code>) yazılmalıdır?",
        a: "Kesinlikle bitişik yazılmalıdır.",
        b: "Kesinlikle ayrı yazılmalıdır.",
        c: "PHP'de her ikisi de kabul edilir ve aynı sonucu verir (Sadece : kullanılan syntax'ta bitişik zorunludur).",
        d: "Hata verir.",
        correct: "c"
    },
    {
        question: "119. <code>switch</code> yapısında, eşleşen bir <code>case</code> bulunduktan sonra diğer durumlara geçmesini engellemek için ne kullanılır?",
        a: "stop",
        b: "return",
        c: "break",
        d: "continue",
        correct: "c"
    },
    {
        question: "120. Bir <code>switch</code> bloğunda, hiçbir <code>case</code> ile eşleşme olmazsa çalışacak blok hangisidir?",
        a: "else",
        b: "error",
        c: "default",
        d: "finallly",
        correct: "c"
    },
    {
        question: "121. Kullanıcı tanımlı bir fonksiyona varsayılan parametre değeri (Default Argument Value) nasıl atanır?",
        a: "function test($a = 50) { }",
        b: "function test($a : 50) { }",
        c: "function test(default $a) { }",
        d: "function test($a) { default: 50 }",
        correct: "a"
    },
    {
        question: "122. Bir fonksiyona parametre gönderirken, değişkenin kopyası yerine kendisinin (adresinin) gönderilmesini sağlamak (Pass by Reference) için hangi işaret kullanılır?",
        a: "*",
        b: "%",
        c: "&",
        d: "$",
        correct: "c"
    },
    {
        question: "123. <code>function sum(int $a, int $b)</code> şeklinde tip belirterek (Type Hinting) fonksiyon tanımlamak ne sağlar?",
        a: "Kodun daha yavaş çalışmasını.",
        b: "Fonksiyona yanlış veri tipi gönderildiğinde PHP'nin hata vermesini veya otomatik çevirmeye çalışmasını sağlar.",
        c: "Sadece tamsayı döndürmesini sağlar.",
        d: "Değişken isimlerini gizler.",
        correct: "b"
    },
    {
        question: "124. PHP'de katı tür denetimini (Strict Types) etkinleştirmek için dosyanın en başına hangi kod yazılır?",
        a: "use strict;",
        b: "declare(strict_types=1);",
        c: "ini_set('strict', 1);",
        d: "require_strict();",
        correct: "b"
    },
    {
        question: "125. Bir fonksiyonun birden fazla değer döndürmesi (örneğin dizi olarak) mümkün müdür?",
        a: "Hayır, sadece tek değer döner.",
        b: "Evet, return [deger1, deger2]; şeklinde dizi döndürerek yapılabilir.",
        c: "Evet, echo komutu ile.",
        d: "Sadece nesne döndürebilir.",
        correct: "b"
    },
    {
        question: "126. Değişken sayıda argüman alan (Variadic) bir fonksiyon tanımlamak için hangi operatör kullanılır? (Örn: <code>function sum(...$num)</code>)",
        a: "...",
        b: "xxx",
        c: "[]",
        d: "args",
        correct: "a"
    },
    {
        question: "127. Aşağıdaki kodun çıktısı nedir? <br><code>$x = 5; $y = 10; function test() { $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y']; } test(); echo $y;</code>",
        a: "10",
        b: "5",
        c: "15",
        d: "Hata verir",
        correct: "c"
    },
    {
        question: "128. PHP'de <code>do...while</code> döngüsü ile <code>while</code> döngüsü arasındaki temel fark nedir?",
        a: "Fark yoktur.",
        b: "do...while döngüsü koşul yanlış olsa bile kod bloğunu en az bir kez çalıştırır.",
        c: "while döngüsü daha hızlıdır.",
        d: "do...while sadece sayılarla kullanılır.",
        correct: "b"
    },
    {
        question: "129. <code>foreach</code> döngüsü hangi veri tipi üzerinde çalışmak için tasarlanmıştır?",
        a: "String",
        b: "Integer",
        c: "Array (Dizi) ve Nesneler",
        d: "Boolean",
        correct: "c"
    },
    {
        question: "130. <code>break 2;</code> komutu ne işe yarar?",
        a: "Döngüyü 2 saniye durdurur.",
        b: "İç içe geçmiş döngülerde, 2 seviye birden (hem içteki hem dıştaki döngüyü) sonlandırır.",
        c: "İkinci döngüye atlar.",
        d: "Hata kodudur.",
        correct: "b"
    },
    {
        question: "131. <code>continue</code> komutu döngü içinde ne yapar?",
        a: "Döngüyü tamamen bitirir.",
        b: "Döngünün o anki iterasyonunu (turunu) sonlandırır ve bir sonraki tura geçer.",
        c: "Döngüyü baştan başlatır.",
        d: "Fonksiyondan çıkar.",
        correct: "b"
    },
    {
        question: "132. PHP'de bir dizinin eleman sayısını (uzunluğunu) almak için hangi fonksiyon kullanılır?",
        a: "length()",
        b: "size()",
        c: "count()",
        d: "dim()",
        correct: "c"
    },
    {
        question: "133. Aşağıdaki kodda $age değişkeninin değeri ne olur?<br><code>$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\"); echo $age['Peter'];</code>",
        a: "37",
        b: "Peter",
        c: "35",
        d: "0",
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
