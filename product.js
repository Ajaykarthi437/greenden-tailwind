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

// ===========================
// PRODUCT SEARCH FUNCTIONALITY
// ===========================

const searchInput = document.getElementById("search");
const products = document.querySelectorAll("#product-container > div");

searchInput.addEventListener("keyup", function () {
    const text = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("h1").textContent.toLowerCase();

        if (name.includes(text)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
});
