// components/Cartlar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus, FaHeart, FaRegGrinHearts, FaRegHeart } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { useContext } from 'react'
import { LikeProductsContext } from '../context/LikeContext'
import { CardContextCart } from '../context/CardContext'
import { BsFillCartDashFill } from 'react-icons/bs'

const Cartlar = ({ el }) => {


    const { addToLike, like, removeToLike } = useContext(LikeProductsContext)
    const { addToCart, cart  , removeToCart} = useContext(CardContextCart)


    




    return (
        <>
            <div key={el.id} className="relative border-2 border-gray-200 rounded-lg group p-2">
                <div className="relative w-full h-[200px]">
                    <img className="object-contain p-2 w-full h-full rounded" src={el.thumbnail} alt={el.title} />
                    <div className="absolute top-3 reght-3 left-0 w-full h-full bg-gray-200/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 duration-300 rounded">
                        {
                            like.find((item) => item.id === el.id) ?
                                <button onClick={() => removeToLike(el)} className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center cursor-pointer">
                                    <FaHeart className="text-[24px] text-[red]" />
                                </button>

                                : <button onClick={() => addToLike(el)} className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center cursor-pointer">
                                    <FaRegHeart className="text-[24px] text-[red]" />
                                </button>
                        }
                       {
                            cart.find((item) => item.id === el.id) ? 
                                <button
                                    onClick={() => removeToCart(el)}
                                    className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center cursor-pointer">
                                    <BsFillCartDashFill className="text-[24px]" />
                                </button>
                            : 
                            <button
                                onClick={() => addToCart(el)}
                                className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center cursor-pointer">
                                <FaCartPlus className="text-[24px]" />
                            </button>
                       }
                        <Link to={`/products/${el.id}`} className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center cursor-pointer">
                            <FiEye className="text-[24px]" />
                        </Link>
                    </div>
                </div>

                <h1 className="text-[14px] px-4 mt-6 line-clamp-2">{el.description}</h1>
                <div className="flex gap-2 px-4 pt-2">
                    <span className="text-yellow-400 font-bold">{el.rating}</span>
                    <span className="text-[#2DA5F3] font-bold">${el.price}</span>
                </div>
                <span className="absolute top-3 right-3 bg-[#EFD33D] px-3 py-1 text-sm font-bold rounded">
                    {Math.round(el.discountPercentage || 19)}% OFF
                </span>
            </div>
        </>
    )
}

export default Cartlar

