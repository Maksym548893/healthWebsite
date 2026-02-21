export const getThreeBlockData = async() => {
    const res = await fetch('http://localhost:5173/book-a-session')
    if(!res.ok) throw new Error('Error Api')
        return res.json()
}