// script.js
    import products from "./data.js";

    const barsMenu = document.querySelector('.menu-bars-container');

    barsMenu.addEventListener('click', () => {
        let barsOpen = document.querySelector('.bars-open');
        let barsClosed = document.querySelector('.bars-closed');

        barsOpen.classList.toggle('hidden');
        barsClosed.classList.toggle('hidden');

        let menuEl = document.querySelector('.menu-list');

        if (!barsClosed.classList.contains('hidden')) {
            menuEl.style.display = 'block';
        } else {
            menuEl.style.display = 'none';
        }
    });
  

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
  