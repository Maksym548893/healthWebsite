export const getHomeAuthorDate = async() => {
    const res = await fetch('http://localhost:5173/')
    if(!res.ok) throw new Error('Error Api')
        return res.json()
}