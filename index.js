// script.js
    import products from "./data.js";

    const barsMenu = document.querySelector('.menu-bars-container');

    // Function to toggle menu visibility and hamburger icon state
    // Function to toggle menu visibility and hamburger icon state
function toggleMenu() {
    let barsOpen = document.querySelector('.bars-open');
    let barsClosed = document.querySelector('.bars-closed');
    let menuEl = document.querySelector('.menu-list');

    // Toggle visibility of menu and icons
    barsOpen.classList.toggle('hidden');
    barsClosed.classList.toggle('hidden');
    menuEl.style.display = barsClosed.classList.contains('hidden') ? 'none' : 'block';
    menuEl.classList.toggle('show');
}

// Function to close the menu and reset hamburger icons
function closeMenu() {
    let menuEl = document.querySelector('.menu-list');
    let barsOpen = document.querySelector('.bars-open');
    let barsClosed = document.querySelector('.bars-closed');

    if (menuEl.style.display === 'block') {
        menuEl.style.display = 'none';
        menuEl.classList.remove('show');
        if (!barsClosed.classList.contains('hidden')) {
            barsOpen.classList.remove('hidden');
            barsClosed.classList.add('hidden');
        }
    }
    }

    // Event listener for the hamburger icon
    barsMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closure when clicking the menu
        toggleMenu();
    });

    // Close menu and reset icons if clicking outside the menu or navigating
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-list') && !e.target.closest('.bars-menu')) {
            closeMenu();
        }
    });

    // Close the menu on navigation (link clicks)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close the menu on page scroll
    window.addEventListener('scroll', closeMenu);


    const productContainer = document.querySelector('.product-grid'); // Assuming the cards are inside a container with class .product-grid

    // Function to generate a product card
    const generateProductCard = (product) => {
        return `
        <div class="product-card">
            <div class="img-container">
            <img src="${product.imageUrl}" alt="${product.name}">
            </div>
            <span class="product-card-label">${product.category}</span>
            <p>Origin: ${product.origin}</p>
            <p>Retailing at: ${product.price}</p>
            <a href="#webapp" class="btn">View in Catalogue</a>
        </div>
        `;
    };
    
    // Loop through products and inject HTML
    products.forEach(product => {
        console.log(product);
        productContainer.innerHTML += generateProductCard(product);
    });
  