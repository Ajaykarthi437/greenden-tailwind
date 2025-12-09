// ===========================
// HAMBURGER MENU FUNCTIONALITY
// ===========================

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Open Sidebar
openMenu.addEventListener("click", () => {
    sideMenu.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
});

// Close Sidebar (X button)
closeMenu.addEventListener("click", () => {
    sideMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});

// Close When Clicking Outside
overlay.addEventListener("click", () => {
    sideMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});