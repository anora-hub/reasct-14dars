import React from 'react'
import useGet from '../Hook/useGet'
import { FiEye } from 'react-icons/fi';
import { FaCartPlus, FaRegGrinHearts, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cartlar from '../components/Cartlar';

const HomePage = () => {
    const { loading, data } = useGet({ url: "products" })
  
    let products = data?.data?.products;
    let famousProducts = products?.slice(products?.length - 24, products.length - 16)


    if (loading) {
        return <div>Loading...</div>
    }










    return (
        <div>
            <main>


                <section class="max-w-screen-2xl mx-auto px-5 pt-8">

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">



                        <div class="lg:col-span-2 bg-gradient-to-r from-gray-200 max-w-[1000px] to-blue-50 rounded-lg p-8
                       flex flex-col md:flex-row items-center justify-between">



                            <div class="max-w-md">
                                <p class="text-blue-500 text-sm font-semibold mb-2">
                                    THE BEST PLACE TO PLAY
                                </p>
                                <h1 class="text-4xl font-bold text-gray-900 mb-4">
                                    Xbox Consoles
                                </h1>
                                <p class="text-gray-600 mb-6">
                                    Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                </p>
                                <button class="bg-orange-500 cursor-pointer cursor-pointer hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
                                    Shop Now →
                                </button>
                            </div>



                            <div class="relative mt-6 md:mt-0">
                                <img src="rasm18.png" alt="" />
                                <span class="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">
                                    $299
                                </span>
                            </div>
                        </div>



                        <div class="flex flex-col gap-6">



                            <div class="bg-gray-900 text-white rounded-lg p-6 flex items-center justify-between">
                                <div>
                                    <p class="text-sm text-gray-300 mb-1">Summer Sales</p>
                                    <h3 class="text-xl font-semibold mb-3">
                                        New Google <br /> Pixel 6 Pro
                                    </h3>
                                    <button class="bg-orange-500 cursor-pointer px-4 py-2 rounded-md text-sm">
                                        Shop Now →
                                    </button>
                                </div>
                                <div>
                                    <span class="bg-yellow-400 text-black text-xs px-3 py-1 rounded">
                                        29% OFF
                                    </span>
                                    <img src="rasm19.png" alt="" />

                                </div>
                            </div>


                            <div class="bg-gray-100 rounded-lg p-6 flex items-center justify-between">
                                <img src="rasm20.png" alt="" />
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                                        Xiaomi FlipBuds Pro
                                    </h3>
                                    <p class="text-gray-600 mb-3">$299 USD</p>
                                    <button class="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md text-sm">
                                        Shop Now →
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">

                        <div className='border border-[1px] border-[black]/20 p-5  flex gap-5 '>
                            <img src="rasm21.png" alt="" />
                            <div>
                                <p class="font-semibold text-gray-800">Fast Delivery</p>
                                <p class="text-sm text-gray-500">Delivery in 24h</p>
                            </div>
                        </div>

                        <div className='border border-[1px] border-[black]/20 p-5  flex gap-5 '>
                            <img src="rasm23.png" alt="" />
                            <div>
                                <p class="font-semibold text-gray-800">24 Hours Return</p>
                                <p class="text-sm text-gray-500">Money back</p>
                            </div>
                        </div>

                        <div className='border border-[1px] border-[black]/20 p-5  flex gap-5 '>
                            <img src="rasm22.png" alt="" />
                            <div>
                                <p class="font-semibold text-gray-800">Secure Payment</p>
                                <p class="text-sm text-gray-500">100% secure</p>
                            </div>
                        </div>

                        <div className='border border-[1px] border-[black]/20 p-5  flex gap-5 '>
                            <img src="rasm24.png" alt="" />
                            <div>
                                <p class="font-semibold text-gray-800">Support 24/7</p>
                                <p class="text-sm text-gray-500">Online support</p>
                            </div>
                        </div>

                    </div>

                </section>



                <section>
                    <div class="container mx-auto pt-[60px]  w-full px-5">


                        <div class="flex items-center justify-between max-[600px]:flex-col">
                            <div class="flex items-center gap-5 max-[600px]:flex-col">
                                <h1 class="text-[#191C1F] text-[24px]">Best Deals</h1>
                                <h2 class="text-[#000] text-[14px]">Deals ends in</h2>
                                <p class="w-[186px] h-[36px] bg-[#F3DE6D] rounded flex items-center justify-center font-bold">
                                    16d : 21h : 57m : 23s
                                </p>
                            </div>

                            <Link to={"products"}>
                                <h1 class="flex items-center gap-2 text-[#2DA5F3] text-[14px] font-bold max-[600px]:mt-3">
                                    Browse All Product
                                    <svg viewBox="0 0 448 512" width="16">
                                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4..." />
                                    </svg>
                                </h1>
                        
                        </Link>
                        </div>


                        <div class="flex flex-col lg:flex-row gap-12 mt-6">


                            <div class="relative max-w-[450px] w-full h-[700px] border-2 border-gray-200">
                                <img src="rasm26.png" alt="product" />


                                <div class="absolute top-5 left-5 space-y-2">
                                    <span class="bg-[#EFD33D] px-3 py-1 text-sm font-bold rounded">32% OFF</span>
                                    <span class="bg-[#EE5858] px-3 py-1 text-sm font-bold text-white rounded">HOT</span>
                                </div>

                                <img className='ml-7 mt-5' src="rasm38.png" alt="" />

                                <h1 class="text-[24px] mt-3 ml-7">
                                    Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...
                                </h1>

                                <div class="flex items-center gap-2 mt-3 ml-7">
                                    <span class="line-through text-gray-400">$865.99</span>
                                    <span class="text-[#2DA5F3] text-[20px] font-bold">$442.12</span>
                                </div>

                                <p class="text-[#5F6C72] text-[23px] mt-3 ml-7">
                                    Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
                                </p>


                                <div class="flex items-center gap-3 mt-7 ml-7">
                                    <button class="w-[48px] h-[48px] bg-[#FFE7D6] rounded flex items-center justify-center">
                                        ♥
                                    </button>

                                    <button class="flex cursor-pointer items-center gap-2 bg-[#FA8232] text-white px-6 py-3 rounded font-bold">
                                        🛒 Add To Cart
                                    </button>

                                    <button class="w-[48px] h-[48px] bg-[#FFE7D6] rounded flex items-center justify-center">
                                        👁
                                    </button>

                                </div>


                            </div>


                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {famousProducts?.map((el) => (
                                    <Cartlar el={el} />
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className='container mx-auto py-5 mt-8 px-5'>
                        <div className='' >
                            <h1 className='font-bold text-[40px] text-center'>Shop with Categorys</h1>
                        </div>


                        <div className='flex items-center justify-between pt-5  '>
                            <div className='border border-[1px] border-[black]/20 p-5 rounded-[10px]  '>
                                <img src="rasm27.png" alt="" />
                                <p> Computer & Laptop </p>
                            </div>


                            <div className='border border-[1px] border-[black]/20 p-5 rounded-[10px]  ' >
                                <img src="rasm28.png" alt="" />
                                <p>Computer & Laptop</p>
                            </div>


                            <div className='border border-[1px] border-[black]/20 p-5 rounded-[10px]  '>
                                <img src="rasm29.png" alt="" />
                                <p>Computer & Laptop</p>
                            </div>


                            <div className='border border-[1px] border-[black]/20 p-5 rounded-[10px]  '>
                                <img src="rasm30.png" alt="" />
                                <p>Computer & Laptop</p>
                            </div>


                            <div className='border border-[1px] border-[black]/20 p-5 rounded-[10px]  '>
                                <img src="rasm31.png" alt="" />
                                <p>Computer & Laptop</p>
                            </div>

                            <div className='border border-[1px] border-[black]/20 p-5 rounded-[10px]  '>
                                <img src="rasm32.png" alt="" />
                                <p>Computer & Laptop</p>
                            </div>
                        </div >
                    </div>
                </section>

                <section className="px-10 py-12">

                    <div className='container mx-auto  py-12 px-5'>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold">Featured Products</h2>

                            <ul className="flex gap-6 text-sm text-gray-500">
                                <li className="text-red-500 border-b-2 border-red-500 pb-1 cursor-pointer">
                                    All Product
                                </li>
                                <li className="cursor-pointer hover:text-black">Smart Phone</li>
                                <li className="cursor-pointer hover:text-black">Laptop</li>
                                <li className="cursor-pointer hover:text-black">Headphone</li>
                                <li className="text-red-500 cursor-pointer">Browse All Product →</li>
                            </ul>
                        </div>


                        <div className="grid grid-cols-12 gap-6">


                            <div className="col-span-3 bg-[#d4b76a] rounded-lg p-6 flex flex-col justify-between">
                                <div>
                                    <p className="text-sm font-semibold">COMPUTER & ACCESSORIES</p>
                                    <h3 className="text-3xl font-bold mt-3">32% Discount</h3>
                                    <p className="mt-2 text-sm">For all electronics products</p>

                                    <div className="mt-4 inline-block bg-white px-3 py-1 text-xs font-semibold">
                                        ENDS OF CHRISTMAS
                                    </div>

                                    <button className="mt-6 cursor-pointer bg-red-500 text-white px-6 py-2 rounded-md text-sm">
                                        SHOP NOW →
                                    </button>
                                </div>

                                <img src="rasm33.jpg" alt="" />
                            </div>






                            <div className="col-span-9 grid grid-cols-4 gap-6">

                                {famousProducts?.map((el) => (
                                    <Cartlar el={el} />
                                ))
                                }

                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div class="container mx-auto py-[90px] px-5  w-full ">
                        <div class="grid grid-cols-2 gap-10">
                            <div class="flex items-center justify-center gap-10 p-8 max-w-[750px] w-full h-[350px] bg-gray-200 ">
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-xl font-bold bg-[#2DA5F3] w-[150px] h-[35px] text-white flex items-center justify-center ">INTRODUCING</h1>
                                    <h1 class="text-[32px] leading-[40px] font-bold">New Apple HomePod Mini</h1>
                                    <p class="text-[#475156] text-[16px] ">Jam-packed with innovation, HomePod mini delivers unexpectedly. </p>
                                    <button class="flex cursor-pointer items-center justify-center cursor-pointer max-w-[160px] w-full h-[50px] gap-2 text-[14px] bg-[#FA8232] font-bold text-white ">    SHOP NOW <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> </button></div>
                                <img class="w-1/2 object-contain w-[240px] h-[240px]" src="rasm35.png" alt="" />
                            </div><div class="flex items-center justify-between gap-10 bg-[#191C1F] max-w-[750px] w-full h-[350px] overflow-hidden relative"><div class="flex flex-col gap-4 z-10 ml-8"><h1 class="bg-[#EFD33D] w-[165px] h-[32px] rounded-[2px] font-bold flex items-center justify-center">INTRODUCING NEW</h1><h2 class="text-[32px] leading-[40px] text-white font-bold">Xiaomi Mi 11 Ultra 12GB+256GB</h2><p class="text-[#ADB7BC] font-bold text-[16px] mt-2">*Data provided by internal laboratories. Industry measurment.</p><button class="flex items-center justify-center cursor-pointer max-w-[160px] w-full h-[50px] gap-2 text-[14px] bg-[#FA8232] font-bold text-white">SHOP NOW <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button></div><div class="relative w-[340px] h-[350px] mb-[-90px]">
                                <img class="w-full h-full object-contain" src="rasm36.png" alt="" />
                            </div><p class="absolute top-5 right-2 w-[90px] h-[90px] bg-[#2DA5F3] text-white font-bold text-[20px] flex items-center justify-center rounded-full ">$590</p></div></div></div>
                </section>


                <section className="container mx-auto  py-12 px-5">

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">Computer Accessories</h2>

                        <ul className="flex gap-6 text-sm text-gray-500">
                            <li className="text-orange-500 border-b-2 border-orange-500 pb-1 cursor-pointer">
                                All Product
                            </li>
                            <li className="cursor-pointer hover:text-black">Keyboard & Mouse</li>
                            <li className="cursor-pointer hover:text-black">Headphone</li>
                            <li className="cursor-pointer hover:text-black">Webcam</li>
                            <li className="cursor-pointer hover:text-black">Printer</li>
                            <li className="text-orange-500 cursor-pointer flex items-center gap-1">
                                Browse All Product →
                            </li>
                        </ul>
                    </div>


                    <div className="grid grid-cols-12 gap-6">

                        <div className="col-span-9 grid grid-cols-4 gap-6">


                            {famousProducts?.map((el) => (
                                <Cartlar el={el}/>
                                           ))
                                        }

                        </div>


                        <div className="col-span-3 flex flex-col gap-6">

                            <div className="bg-[#FFF2A8] rounded-lg p-6 text-center flex flex-col justify-between">
                                <img src="rasm37.png" alt="" className="mx-auto mb-4" />
                                <h3 className="font-semibold text-lg">Xiaomi True Wireless Earbuds</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Escape the noise, it's time to hear the magic with Xiaomi Earbuds
                                </p>

                                <p className="mt-3 text-sm">
                                    Only for: <span className="font-bold">$299 USD</span>
                                </p>

                                <button className="mt-4 cursor-pointer bg-orange-500 text-white py-2 rounded-md">
                                    SHOP NOW →
                                </button>
                            </div>


                            <div className="bg-[#0E3A5D] rounded-lg p-6 text-white text-center">
                                <span className="text-xs bg-white/20 px-3 py-1 rounded">
                                    SUMMER SALES
                                </span>

                                <h3 className="text-3xl font-bold mt-4">37% DISCOUNT</h3>
                                <p className="text-sm mt-2">
                                    only for <span className="text-yellow-400">SmartPhone</span> product.
                                </p>

                                <button className="mt-4 cursor-pointer bg-blue-500 py-2 px-4 rounded-md">
                                    SHOP NOW →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>






            </main>


        </div>
    )
}

export default HomePage