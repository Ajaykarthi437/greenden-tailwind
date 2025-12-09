
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    openMenu.addEventListener("click", () => {
        sideMenu.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
    });

    closeMenu.addEventListener("click", () => {
        sideMenu.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", () => {
        sideMenu.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
    });
