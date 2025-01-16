// script.js
import products from "./data.js";

// Menu Toggle Logic
const barsMenu = document.querySelector('.menu-bars-container');
const barsOpen = document.querySelector('.bars-open');
const barsClosed = document.querySelector('.bars-closed');
const menuEl = document.querySelector('.menu-list');

// Helper function to toggle visibility
const toggleVisibility = (element, condition) => {
    element.style.display = condition ? 'block' : 'none';
};

// Function to toggle menu visibility and hamburger icon state
const toggleMenu = () => {
    barsOpen.classList.toggle('hidden');
    barsClosed.classList.toggle('hidden');
    const isMenuClosed = barsClosed.classList.contains('hidden');
    toggleVisibility(menuEl, !isMenuClosed);
    menuEl.classList.toggle('show', !isMenuClosed);
};

// Function to close the menu and reset hamburger icons
const closeMenu = () => {
    toggleVisibility(menuEl, false);
    menuEl.classList.remove('show');
    if (!barsClosed.classList.contains('hidden')) {
        barsOpen.classList.remove('hidden');
        barsClosed.classList.add('hidden');
    }
};

// Event listener for the hamburger icon
barsMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing the menu on click inside the menu
    toggleMenu();
});

// Close menu and reset icons if clicking outside the menu or navigating
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-list') && !e.target.closest('.menu-bars-container')) {
        closeMenu();
    }
});

// Close the menu on navigation (link clicks)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close the menu on page scroll
window.addEventListener('scroll', closeMenu);


// Product Cards Logic
const productContainer = document.querySelector('.product-grid'); // Assuming the cards are inside a container with class .product-grid

// Function to generate a product card
const generateProductCard = ({ imageUrl, name, category, origin, price }) => `
    <div class="product-card">
        <div class="img-container">
            <img src="${imageUrl}" alt="${name}">
        </div>
        <span class="product-card-label">${category}</span>
        <p>Origin: ${origin}</p>
        <p>Retailing at: ${price}</p>
        <a href="#webapp" class="btn">View in Catalogue</a>
    </div>
`;

// Function to render products in the product container
const renderProducts = (productList) => {
    productContainer.innerHTML = productList.map(generateProductCard).join('');
};

// Inject HTML for products
renderProducts(products);

