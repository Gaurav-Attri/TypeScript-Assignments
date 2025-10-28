/*
- Assignment 2: E-commerce Product Filter
- Concepts: Union types, type literals, function types
- Build a product filtering system. 
- Create a Product interface with properties: id, name, price, category, and inStock (boolean). 
- Create a type SortOrder that can only be 'asc' or 'desc'. 
- Write a function filterProducts that accepts an array of products and filter options (price range, category, stock status) and returns filtered products. 
- Add another function sortProducts that sorts by price with the specified SortOrder.
*/

/*
Key Takeaways 📚

Immutability: Avoid mutating input arrays - always return new arrays
Composability: Allow multiple filters to work together
Simplicity: Don't over-engineer with unnecessary abstractions
Pure functions: Functions should return values, not just cause side effects
*/


let productId = 0;
const products: Product[] = [
    {
        id: ++productId,
        name: "Nike Shoes",
        price: 2000,
        category: "Lifestyle",
        inStock: true
    },
    {
        id: ++productId,
        name: "Adidas T-Shirt",
        price: 1200,
        category: "Apparel",
        inStock: true
    },
    {
        id: ++productId,
        name: "Puma Sneakers",
        price: 3500,
        category: "Lifestyle",
        inStock: false
    },
    {
        id: ++productId,
        name: "Apple Watch",
        price: 25000,
        category: "Electronics",
        inStock: true
    },
    {
        id: ++productId,
        name: "Samsung Earbuds",
        price: 4000,
        category: "Electronics",
        inStock: true
    },
    {
        id: ++productId,
        name: "Levi's Jeans",
        price: 3000,
        category: "Apparel",
        inStock: true
    },
    {
        id: ++productId,
        name: "Reebok Hoodie",
        price: 2200,
        category: "Apparel",
        inStock: false
    },
    {
        id: ++productId,
        name: "Canon DSLR Camera",
        price: 55000,
        category: "Electronics",
        inStock: true
    },
    {
        id: ++productId,
        name: "Sony Headphones",
        price: 6000,
        category: "Electronics",
        inStock: true
    },
    {
        id: ++productId,
        name: "Nike Cap",
        price: 800,
        category: "Lifestyle",
        inStock: true
    }
]

type ProductId = {readonly id: number}

type SortOrder = 'asc' | 'desc';

interface FilterOption{
    priceRange?: {
        priceRangeStart: number;
        priceRangeEnd: number;
    };
    category?: string;
    stockStatus?: boolean // true -> in stock, false -> not in stock
}

interface ProductInput{
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

type Product = ProductId & ProductInput;


function filterProducts(products: Product[], filterOptions: FilterOption): Product[]{
    const {priceRange, category, stockStatus} = filterOptions;
    let filteredProducts: Product[] = products;
    
    if(priceRange){
        const {priceRangeStart, priceRangeEnd} = priceRange;
        filteredProducts = filteredProducts.filter((product) => product.price >= priceRangeStart && product.price <= priceRangeEnd);
    }
    if(category){
        filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
    if(stockStatus != undefined){
        filteredProducts = filteredProducts.filter((product) => product.inStock === stockStatus);
    }
    return filteredProducts;
}

function sortProducts(products: Product[], order: SortOrder){
    const sortedProducts = [...products];
    sortedProducts.sort(
        (p1, p2) => {
            return order === 'asc' ? p1.price - p2.price : p2.price - p1.price
        }
    )
    return sortedProducts
}



console.log(
    filterProducts(products, {
            priceRange: {
                priceRangeStart: 2000,
                priceRangeEnd: 4000
            }
    })
)

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(
    filterProducts(products, {
        category: "Electronics"
    })
)

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(
    filterProducts(products, {
        stockStatus: false
    })
)
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(
    filterProducts(products, {
        priceRange: {
            priceRangeStart: 2000,
            priceRangeEnd: 4000
        },
        category: "Electronics"
    })
)


console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(
    sortProducts(products, 'desc')
);