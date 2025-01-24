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

// Helper function to generate star icons based on the rating
const generateStars = (rating) => {
    const percentage = `${(rating / 5) * 100}%`; // Convert rating to percentage
    
    // Return the star container HTML along with the rating label
    return `
        <div class="star-container" style="--rating: ${percentage};" data-rating="${rating}">
            <span class="star">★★★★★</span> <!-- Display all stars -->
        </div>
        <span class="rating-label">(${rating}/5)</span> <!-- Display rating label -->
    `;
};

// Function to generate a product card
const generateProductCard = ({ imageUrl, name, category, origin, price, rating }) => `
    <div class="product-card">
        <a href="#webapp" class="card-image">
            <img class="product-image" src="${imageUrl}" alt="${name}" />
            <span class="product-card-label"> ${category}</span>
        </a>
        <div class="product-details">
            <a href="#">
                <p>Origin: <i><b>${origin}</b></i></p>
                <p> Retailing at: <i><b>${price}</b></i></p>
            </a>
            
            <div>
                <div class="rate-card">
                    ${generateStars(rating)} <!-- Render stars here -->
                </div>
            </div>
        </div>

        <a href="#webapp" class="btn">
            <i class="fa-solid fa-list-check" style="color: #FFF;"></i>
            View in Catalogue
        </a>
    </div>
`;


// Function to render products in the product container
const renderProducts = (productList) => {
    productContainer.innerHTML = productList.map(generateProductCard).join('');
};

// Inject HTML for products
renderProducts(products);

