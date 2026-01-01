const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("status").innerText =
            "✅ Pesan berhasil dikirim! Terima kasih sudah menghubungi.";
        
        form.reset();
    });
}
const toggle = document.getElementById("darkToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
const images = document.querySelectorAll(".media-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Klik tombol X
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Klik area gelap
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// TUTUP PAKAI ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});
