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
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">4.0</span>
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

