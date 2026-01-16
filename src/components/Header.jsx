import React, { useContext, useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import LikePage from '../pages/LikePage'
import { LikeProductsContext } from '../context/LikeContext'
import { CardContextCart } from '../context/CardContext'
import useGet from '../Hook/useGet'

const Header = () => {

    const { like } = useContext(LikeProductsContext)
    const { cart } = useContext(CardContextCart)
    const [search, setSearch] = useState("")

    const { data } = useGet({ url: `products/search?q=${search}&limit=194` })
    const products = data?.data?.products;
    const navigate = useNavigate()
  

   



    console.log(products);










    return (
        <>
            <header className='bg-[#1B6392] fixed top-0 left-0 w-full z-50 '>
                <div className='container mx-auto px-5'>
                    <div className='flex items-center justify-between py-5' >
                        <div className='text-[white]'>
                            <h1>Welcome to Clicon online eCommerce store.</h1>
                        </div>
                        <div className=' flex items-center gap-9'>
                            <div className='flex items-center gap-5 ' >
                                <p className='text-white'>Follow us:</p>
                                <img src="rasm1.png" alt="" />
                                <img src="rasm2.png" alt="" />
                                <img src="rasm3.png" alt="" />
                                <img src="rasm4.png" alt="" />
                                <img src="rasm5.png" alt="" />
                                <img src="rasm6.png" alt="" />
                            </div>
                            <div className='flex items-center gap-5'>
                                <select className='text-white' >
                                    <option value="UZB">UZB</option>
                                    <option value="RUS">RUS</option>
                                    <option value="ENG">ENG</option>
                                </select>
                                <select className='text-white'>
                                    <option value="USD">USD </option>
                                    <option value="UZS">UZS </option>
                                    <option value="RUB">RUB </option>
                                </select>
                            </div>
                        </div>




                    </div>


                    <div className='flex items-center justify-between w-full py-[10px] border-t border-white/40'>


                        <div className='flex items-center gap-4'>
                            <img src="rasm7.png" alt="" />
                            <h1 className='text-white font-bold text-[35px]'>
                                <Link to={`/`}>
                                    CLICON
                                </Link>
                            </h1>
                        </div>


                        <div className="flex-1 mx-40 relative">
                            <div className="relative w-full">
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    type="text"
                                    placeholder="Search for anything..."
                                    className="w-full py-3 pl-4 pr-12 rounded-sm bg-gray-100 text-gray-600 placeholder-gray-400 outline-none"
                                />

                                <svg
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>

                            {search && (
                                <div className="absolute top-full left-0 bg-white p-5 rounded-2xl shadow-2xl shadow-amber-600 flex flex-col gap-2 w-full mt-2 z-50">
                                    {products?.length > 0 ? (
                                        products.map((el) => (
                                            <button onClick={() => {navigate(`/products/${el.id}`) , setSearch("")}}
                                                key={el.id}
                                                className="border-[2px] border-amber-600 rounded-2xl p-5 flex items-center gap-5"
                                            >
                                                <img
                                                    className="w-[60px] h-[60px] object-cover"
                                                    src={el.thumbnail}
                                                    alt={el.title}
                                                />
                                                <div>
                                                    <h1 className="font-semibold">{el.title}</h1>
                                                    <p className="text-sm text-gray-500 line-clamp-2">
                                                        {el.description}
                                                    </p>
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-500">Hech narsa topilmadi</p>
                                    )}
                                </div>
                            )}
                        </div>




                        <div className='flex gap-5'>

                            <NavLink to="/card" className="relative">
                                <img src="rasm9.png" alt="Like" className="w-7 h-7" />

                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                                    {cart?.length}
                                </span>
                            </NavLink>


                            <NavLink to="/like" className="relative">
                                <img src="rasm10.png" alt="Cart" className="w-7 h-7" />
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                                    {like.length}
                                </span>
                            </NavLink>
                            <img src="rasm11.png" alt="User" />
                        </div>


                    </div>




                </div>



            </header>
            <div className="fixed top-[135px] left-0 w-full py-4 z-40 bg-white">
                <div className="container mx-auto px-5">

                    <div className="flex justify-between items-center">
                        <div className="flex gap-8 items-center">
                            <div>
                                <select className="bg-[#F2F4F5] p-5 px-[30px] rounded-[7px]">
                                    <option value="">All Category</option>
                                </select>
                            </div>

                            <div className="flex gap-3">
                                <img src="rasm13.png" alt="" />
                                <p className="text-[#5F6C72]">Track Order</p>
                            </div>

                            <div className="flex gap-3">
                                <img src="rasm14.png" alt="" />
                                <p className="text-[#5F6C72]">Compare</p>
                            </div>

                            <div className="flex gap-3">
                                <img src="rasm15.png" alt="" />
                                <p className="text-[#5F6C72]">Customer Support</p>
                            </div>

                            <div className="flex gap-3">
                                <img src="rasm16.png" alt="" />
                                <p className="text-[#5F6C72]">Need Help</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <img src="rasm17.png" alt="" />
                            <h3>+1-202-555-0104</h3>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Header