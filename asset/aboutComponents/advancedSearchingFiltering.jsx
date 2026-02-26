import { useMemo, useState } from "react";

function SearchingFiltering() {
    const products = [
  { id: 1, name: "iPhone 15", category: "electronics", price: 999, rating: 4.8, brand: "Apple", inStock: true },
  { id: 2, name: "Galaxy S24", category: "electronics", price: 899, rating: 4.7, brand: "Samsung", inStock: true },
  { id: 3, name: "MacBook Air", category: "electronics", price: 1199, rating: 4.9, brand: "Apple", inStock: false },
  { id: 4, name: "Nike Hoodie", category: "clothing", price: 120, rating: 4.3, brand: "Nike", inStock: true },
  { id: 5, name: "Adidas Sneakers", category: "clothing", price: 150, rating: 4.4, brand: "Adidas", inStock: true },
  { id: 6, name: "Blender Pro", category: "home", price: 200, rating: 4.2, brand: "Philips", inStock: true },
  { id: 7, name: "Office Chair", category: "home", price: 350, rating: 4.5, brand: "Ikea", inStock: false }
];

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [rating, setRating] = useState(0)
    const [brand, setBrand] = useState('all')
    const [stock, setStock] = useState('all')

    const FilteringThisAll = useMemo(() => {
        return products.filter(prod => {
            const matchName = prod.name.toLowerCase().includes(search.toLowerCase())
            const matchCategory = category === 'all' || prod.category === category
            const matchPrice = (minPrice === 0 && maxPrice === 0) || (prod.price >= minPrice && prod.price < maxPrice)
            const matchRating = rating === 0 || prod.rating <= rating
            const matchBrand = brand === 'all' || prod.brand === brand
            const matchStock = stock === 'all' || prod.inStock === (stock === 'true') 

            return matchName && matchBrand && matchCategory && matchPrice && matchRating && matchStock
        }
    
    ).sort((a, b) => a.price - b.price)
    }, [search, category, minPrice, maxPrice, rating, brand, stock, products])


    return(
        <div className="SearchingFiltering" style={{display: 'flex', flexDirection: 'column', height: '400px', gap: '20px', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div className="filter" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', color: 'black', gap: '20px'}}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <div className="ca">
            <label htmlFor="category"></label>
            <select value={category} name="categorySelector" id="category" onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home</option>
            </select>
            </div>

            <div className="pr">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                <input type="number" id="price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
            </div>

            <div className="ra">
            <label htmlFor="rating">Rating</label>
            <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
            </div>

            <div className="br">
            <label htmlFor="brand">Brand</label>
           <select value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
                <option value="all">All</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Philips">Philips</option>
                <option value="Ikea">Ikea</option>
            </select>
            </div>

            <div className="st">
            <label htmlFor="isStock">Is Stock</label>
            <select id="isStock" value={stock} onChange={(e) => setStock(e.target.value)}>
                <option value="all">All</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>  
            </div>

            </div>
            <ul>
            {FilteringThisAll.map(fit => 
                <li style={{color: 'red'}} key={fit.id}>{fit.name} "{fit.brand}": / {fit.category} / {fit.rating} / {fit.inStock} - {fit.price}</li>
            )}
            </ul>

        </div>
    )
}

export default SearchingFiltering