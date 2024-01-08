

function filterProductsByCategory(products) {
    // Returned function (closure)
    return function(category) {
        // Using the filter method to filter products by category
        return products.filter(product => product.category === category);
    };
}

//OR  
// return products.filter(function (product) {
//     return product.category === category;

// #####product => product.category === category):######-----

// This is an arrow function used as the argument for the filter method.
// It takes a single parameter, product, representing each element in the products array during the iteration.
// The function checks if the category property of the current product is equal (===) to the specified category
// Example usage:
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Sneakers', category: 'Fashion' },
    { id: 3, name: 'Headphones', category: 'Electronics' },
    { id: 4, name: 'T-shirt', category: 'Fashion' },
    { id: 5, name: 'Smartphone', category: 'Electronics' },
    { id: 6, name: 'Hoddies', category: 'Fashion' },
    { id: 7, name: 'HomeTheater', category: 'Electronics' },
];

// Creating a specialized function to filter products by category
const filterProductType = filterProductsByCategory(products);

// Using the specialized function to filter products in the 'Electronics' category
const electronicsProducts = filterProductType('Electronics');
const FashionProducts = filterProductType('Fashion');
// for print only name.  

console.log(electronicsProducts .map(product => product.name));
console.log(FashionProducts.map(product => product.name));
