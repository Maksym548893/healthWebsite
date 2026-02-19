export const getHomeGreenPatukData = async() => {
    const res = await fetch('http://localhost:5173/')
    if(!res.ok) throw new Error ('API Error')
    return res.json()
}