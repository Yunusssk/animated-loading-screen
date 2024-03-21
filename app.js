// HTML'den gerekli öğeleri seçiyoruz
const loadingText = document.querySelector('.loading-text'); // Yükleme metni
const bg = document.querySelector('.bg'); // Arka plan

let load = 0; // Yükleme yüzdesi

// Belirli aralıklarla bluring() işlevini çağıran bir zamanlayıcı oluşturuyoruz
let int = setInterval(bluring, 30);

// bluring() işlevi: yükleme yüzdesini arttırır ve arka planı bulanıklaştırır
function bluring() {
    load++; // Yükleme yüzdesini arttır

    // Eğer yükleme yüzdesi 99'dan büyükse, zamanlayıcıyı durdur
    if (load > 99) {
        clearInterval(int);
    }

    console.log(load); // Yükleme yüzdesini konsola yazdır

    // Yükleme metnini güncelle (yüzdeyi göster)
    loadingText.innerText = `${load}%`;

    // Yükleme yüzdesine göre yükleme metninin opaklığını ayarla
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);

    // Yükleme yüzdesine göre arka planı bulanıklaştır
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Belirli bir aralıktaki bir sayıyı başka bir aralığa dönüştüren bir ölçek işlevi
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
