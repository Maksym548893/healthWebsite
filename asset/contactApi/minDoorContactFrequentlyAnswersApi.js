export const getMinDoorFrequentlyAnswersData = async() => {
    const res = await fetch('http://localhost:5173/contact')
    if(!res.ok) throw new Error('Error Api')
        return res.json()
}