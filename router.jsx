// import { useEffect } from "react"
// import useLocalStorage from "../hooks/UseLocalStorage"

// export const navigate = (path) => {
//     window.history.pushState({}, '', path)
//     window.dispatchEvent(new PopStateEvent('popstate'))
// }

// const Router = ({ routes }) => {
//     const path = window.location.pathname
//     const Component = routes.find((route) => route.path === path)?.component

//     const [currentRoute, setCurrentRoute] = useLocalStorage(
//         'routes',
//         window.location.pathname
//     )

//     useEffect(() => {
//         const handle = () => {
//             setCurrentRoute(window.location.pathname)
//         }

//         window.addEventListener('popstate', handle)
//         return() => {
//             window.removeEventListener('popstate', handle)
//         }
//     })

//     return Component ?
//     (
//     <Component />
//     ) : (
//     <h1>Upsss.... incorrect page</h1>
//     )
// }

// export default Router