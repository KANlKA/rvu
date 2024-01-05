document.addEventListener('DOMContentLoaded', function () {
    var productCartIcons = document.querySelectorAll('.box .content i.bx-cart-alt');
    var mainCartIcon = document.querySelector('.header-icons .menu-icon');
    var cartCountElement = document.querySelector('.header-icons .cart-count');

    // Counter to keep track of the number of items in the cart
    var cartCount = 0;

    productCartIcons.forEach(function (cartIcon) {
        cartIcon.addEventListener('click', function () {
            var productName = this.parentNode.querySelector('h2').innerText;
            cartCount++;

            // Update the main cart icon with the cart count
            updateMainCartCount(cartCount);
        });
    });

    // Function to update the main cart icon with the cart count
    function updateMainCartCount(count) {
        // Update the cart count element
        cartCountElement.textContent = count;
    }
    
});



document.addEventListener('DOMContentLoaded', function () {
    var productCartIcons = document.querySelectorAll('.box .content i.bx-cart-alt');
    var mainCartIcon = document.querySelector('.header-icons .menu-icon');
    var cartCountElement = document.querySelector('.header-icons .cart-count');
    var cartDropdown = document.getElementById('cart-dropdown');
    var totalPriceElement = document.getElementById('total-price');

    // Counter to keep track of the number of items in the cart
    var cartCount = 0;
    // Variable to store the total price
    var totalPrice = 0;

    productCartIcons.forEach(function (cartIcon) {
        cartIcon.addEventListener('click', function () {
            var productInfo = {
                name: this.parentNode.querySelector('h2').innerText,
                price: parseFloat(this.parentNode.querySelector('span').innerText.replace('$', ''))
            };
            cartCount++;

            // Update the main cart icon with the cart count
            updateMainCartCount(cartCount);

            // Add the product to the dropdown
            addToDropdown(productInfo);

            // Update the total price
            totalPrice += productInfo.price;
            updateTotalPrice(totalPrice);
        });
    });

    // Function to update the main cart icon with the cart count
    function updateMainCartCount(count) {
        // Update the cart count element
        cartCountElement.textContent = count;
    }

    // Function to update the total price
    function updateTotalPrice(price) {
        // Update the total price element
        totalPriceElement.textContent = '$' + price.toFixed(2);
    }

    // Function to add a product to the dropdown
    function addToDropdown(productInfo) {
        // Create a new list item for the dropdown
        var listItem = document.createElement('li');

        // Create a span for the product name
        var productNameSpan = document.createElement('span');
        productNameSpan.textContent = productInfo.name;

        // Create a span for the product price
        var productPriceSpan = document.createElement('span');
        productPriceSpan.textContent = '$' + productInfo.price.toFixed(2);

        // Create a delete button (x) for the product
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&times;'; // "x" symbol
        deleteButton.classList.add('delete-item');

        // Add click event listener to the delete button
        deleteButton.addEventListener('click', function () {
            // Remove the list item when the delete button is clicked
            listItem.remove();

            // Decrease the cart count
            cartCount--;

            // Update the main cart icon with the new count
            updateMainCartCount(cartCount);

            // Update the total price
            totalPrice -= productInfo.price;
            updateTotalPrice(totalPrice);
        });

        // Append the product name, price, and delete button to the list item
        listItem.appendChild(productNameSpan);
        listItem.appendChild(productPriceSpan);
        listItem.appendChild(deleteButton);

        // Add the list item to the dropdown
        cartDropdown.appendChild(listItem);
    }

    // Show the dropdown when the main cart icon is clicked
    mainCartIcon.addEventListener('click', function () {
        // Toggle the visibility of the dropdown
        cartDropdown.classList.toggle('show-dropdown');
    });
});