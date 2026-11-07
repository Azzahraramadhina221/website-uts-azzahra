const form = document.querySelector("#order-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#customer-name").value.trim();
    const message = document.querySelector("#form-message");

    if (name === "") {
      message.textContent = "Silakan isi nama terlebih dahulu.";
      return;
    }

    message.textContent = `Terima kasih, ${name}. Pesanan contoh berhasil dicatat.`;
    form.reset();
  });
}

const videoBtn = document.getElementById("videoBtn");
const videoMenu = document.getElementById("videoMenu");

// Membuka dan menutup dropdown
if (videoBtn && videoMenu) {

    videoBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        videoMenu.classList.toggle("show");
    });

    // Menutup dropdown ketika klik di luar menu
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            videoMenu.classList.remove("show");
        }
    });
}