// import { useState } from "react"

// const useLocalStorage = (key, defaultValue) => {
//     const storageValue = localStorage.getItem(key) || JSON.stringify(defaultValue)

//     const [LocalStorageValue, setLocalStorageValue] = useState(JSON.parse(storageValue) || defaultValue)


//     const changeValue = (NewItem) => {
//         localStorage.setItem(key, JSON.stringify(NewItem))

//         setLocalStorageValue(() => {
//             if(typeof NewItem === 'object') {
//                 return {...NewItem}
//             } else {
//                 return NewItem
//             }
//         })
//     }

//     return[localStorage, changeValue]
// }

// export default useLocalStorage