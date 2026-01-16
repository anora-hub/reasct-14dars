import React, { createContext, useState } from 'react'

export const CardContextCart = createContext()

const CardContext = ({ children }) => {
    const [cart, setCart] = useState([])


    function addToCart(el) {
        setCart((prev) => {
            return [...prev, { ...el, qty: 1 }]
        })
    }

    function removeToCart(el) {
        setCart((prev) => {
            return prev.filter((item) => item.id !== el.id)
        })
    }

    function plus(el) {
        setCart((prev) => {
            return prev.map((item) => {
                if (item.id === el.id) {
                    return { ...item, qty: item.qty + 1 }
                } else {
                    return item
                }
            })
        })
    }

    function minus(el) {
        setCart((prev) => {
            if (prev.find((item) => item.id === el.id)?.qty > 1) {
                return prev.map((el1) =>{
                    return {... el1 , qty:el1.qty - 1}
                })
            } else{
                return prev.filter((el1)=> el1.id !== el.id)
            }
        })
    }

    


    return (
        <CardContextCart.Provider value={{ cart, setCart, addToCart, removeToCart, plus , minus }}>
            {children}
        </CardContextCart.Provider>
    )
}

export default CardContext
