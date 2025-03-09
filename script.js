document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu mobile
    document.querySelector(".hamburger").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("active");
    });

    // Tombol close menu mobile
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.remove("active");
    });

    // Toggle submenu di Mobile
    document.querySelectorAll("#mobile-menu .submenu > a").forEach(menu => {
        menu.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle("open");
        });
    });

    // Toggle submenu di Desktop (mengambang saat diklik)
    document.querySelectorAll(".desktop-menu .submenu > a").forEach(menu => {
        menu.addEventListener("click", function (e) {
            e.preventDefault();
            let submenu = this.parentElement;
            submenu.classList.toggle("active");
        });
    });
});
