import { useState, useEffect, useRef } from "react";

const BASE_URL = 'http://localhost:5173/'

export default function FetchInstance() {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState([])
    const [page, setPage] = useState(0)

    const abortControllerRef = useRef(null)

    useEffect(() => {
        const fetchPosts = async () => {
            abortControllerRef.current?.abort()
            abortControllerRef.current = new AbortController()
        
            setIsLoading(true)

        try {
            const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                signal: abortControllerRef.current?.signal
            })
            const posts = (await response.json())
            setPost(posts)
        }

        catch (e) { 
            if(e === 'AbortError') {
                console.log('Aborted')
                return
            }
            
            setError(e)
        } finally {
            setIsLoading(false)
        }


        }

        fetchPosts()
    }, [page])

}