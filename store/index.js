// script.js
    import products from "./data.js";

    document.getElementById('menu-icon').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });

  

    const productContainer = document.querySelector('.product-grid'); // Assuming the cards are inside a container with class .product-grid

    // Function to generate a product card
    const generateProductCard = (product) => {
        return `
        <div class="product-card">
            <div class="img-container">
            <img src="${product.imageUrl}" alt="${product.name}">
            </div>
            <h4>${product.category}</h4>
            <p>From: ${product.origin}</p>
            <p>Price: ${product.price}</p>
            <a href="#webapp" class="btn">View in Catalogue</a>
        </div>
        `;
    };
    
    // Loop through products and inject HTML
    products.forEach(product => {
        console.log(product);
        productContainer.innerHTML += generateProductCard(product);
    });
  