import { useMemo, useState } from "react"

import './searchField.css'

function SearchField() { 

    const [products, setProducts] = useState([
  { id: 1, name: "Apple iPhone 14", price: 999 },
  { id: 2, name: "Samsung Galaxy S23", price: 899 },
  { id: 3, name: "Google Pixel 8", price: 799 },
  { id: 4, name: "OnePlus 12", price: 749 },
  { id: 5, name: "Xiaomi Mi 12", price: 699 },
  { id: 6, name: "Sony Xperia 1", price: 1199 },
  { id: 7, name: "Huawei P50 Pro", price: 999 },
  { id: 8, name: "Nokia XR20", price: 599 },
  { id: 9, name: "LG Velvet", price: 499 },
  { id: 10, name: "Motorola Edge 30", price: 799 },
  { id: 11, name: "Asus ROG Phone 7", price: 1299 },
  { id: 12, name: "Oppo Find X6", price: 949 },
  { id: 13, name: "Vivo X90", price: 899 },
  { id: 14, name: "Realme GT Neo", price: 449 },
  { id: 15, name: "ZTE Axon 40", price: 549 },
  { id: 16, name: "Lenovo Legion", price: 1099 },
  { id: 17, name: "HTC U20", price: 649 },
  { id: 18, name: "BlackBerry Key2", price: 399 },
  { id: 19, name: "Alcatel 3L", price: 199 },
  { id: 20, name: "Honor Magic 5", price: 799 },
  { id: 21, name: "Samsung A54", price: 549 },
  { id: 22, name: "Apple iPhone SE", price: 429 },
  { id: 23, name: "Apple iPhone 13", price: 799 },
  { id: 24, name: "Samsung A34", price: 449 },
  { id: 25, name: "Huawei Nova 9", price: 499 },
  { id: 26, name: "Xiaomi Redmi Note 12", price: 329 },
  { id: 27, name: "Google Pixel 7a", price: 499 },
  { id: 28, name: "OnePlus Nord 3", price: 399 },
  { id: 29, name: "Sony Xperia 5", price: 899 },
  { id: 30, name: "Realme 10 Pro", price: 279 },
  { id: 31, name: "Vivo Y76", price: 249 },
  { id: 32, name: "Oppo A78", price: 229 },
  { id: 33, name: "Nokia G22", price: 199 },
  { id: 34, name: "Lenovo K13", price: 179 },
  { id: 35, name: "Motorola Moto G Power", price: 249 },
  { id: 36, name: "Asus Zenfone 9", price: 599 },
  { id: 37, name: "Black Shark 5", price: 699 },
  { id: 38, name: "ZTE Blade V40", price: 299 },
  { id: 39, name: "Honor X9", price: 329 },
  { id: 40, name: "LG Stylo 6", price: 199 },
  { id: 41, name: "HTC Desire 22", price: 399 },
  { id: 42, name: "Huawei Y7a", price: 249 },
  { id: 43, name: "Apple iPhone 12", price: 699 },
  { id: 44, name: "Samsung Galaxy Note 20", price: 899 },
  { id: 45, name: "Google Pixel 6", price: 599 },
  { id: 46, name: "Xiaomi Poco F4", price: 449 },
  { id: 47, name: "Realme Narzo 50", price: 229 },
  { id: 48, name: "Vivo T1", price: 199 },
  { id: 49, name: "Oppo Reno 8", price: 399 },
  { id: 50, name: "Sony Xperia 10", price: 499 }
    ])

  const [searchField, setSearchField] = useState('')

  const filterByName = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    )
  }, [products, searchField])

  return(
    <div className="searchField">
      <input type="text" value={searchField} onChange={(e) => setSearchField(e.target.value)}/>

      <ul>
      {filterByName.length === 0 && searchField === '' ? (<li>Not Found</li>) : (filterByName.map(pruduct => 
        <li className="alaks" style={{color: 'green'}} key={pruduct.id}>{pruduct.name} - price: {pruduct.price}$</li>
      ))
      }
      </ul>
    </div>
  )
}
export default SearchField