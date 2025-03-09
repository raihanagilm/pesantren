document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.querySelector(".close-btn");
    const hamburger = document.querySelector(".hamburger");
    const subMenus = document.querySelectorAll("#mobile-menu .submenu");

    function toggleMenu() {
        mobileMenu.classList.toggle("active");
        if (!mobileMenu.classList.contains("active")) {
            resetSubMenus(); // Reset submenu jika menu ditutup
        }
    }

    function toggleSubMenu(event) {
        event.preventDefault();
        event.target.parentElement.classList.toggle("open");
    }

    function resetSubMenus() {
        subMenus.forEach(submenu => {
            submenu.classList.remove("open");
        });
    }

    hamburger.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    document.querySelectorAll("#mobile-menu .submenu > a").forEach(menu => {
        menu.addEventListener("click", toggleSubMenu);
    });

    document.querySelectorAll(".desktop-menu .submenu > a").forEach(menu => {
        menu.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        });
    });
});
