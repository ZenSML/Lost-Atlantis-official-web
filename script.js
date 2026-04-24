function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Logic for loading products from LocalStorage
let products = JSON.parse(localStorage.getItem('la_products')) || [];
// (Add the rest of your product management functions here)
