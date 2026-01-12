
import React, { createContext, useState } from 'react'

export const LikeProductsContext = createContext()

const LikeContext = ({ children }) => {

    const [like, setLike] = useState([])

    const addToLike = (el) => {
        setLike((prev) => {
            const exists = prev.find(item => item.id === el.id)
            if (exists) return prev // agar bor bo‘lsa qo‘shmaydi
            return [...prev, el]
        })
    }

    const removeToLike = (el) => {
       setLike((prev) =>{
        return prev.filter((item) => item.id !==el.id)
       })
    }

    return (
        <LikeProductsContext.Provider value={{ like, addToLike, removeToLike }}>
            {children}
        </LikeProductsContext.Provider>
    )
}

export default LikeContext
