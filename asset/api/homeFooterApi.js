export const getHomeFooterData = async() => {
    const res = await fetch('http://localhost:5173/')
    if(res.ok) throw new Error("Error API");
    return res.json()    
}