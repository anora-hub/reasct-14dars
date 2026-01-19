import React, { useContext } from 'react'
import { CardContextCart } from '../context/CardContext'
import { Link } from 'react-router-dom'

const Cartpage = () => {


    const { cart, minus, plus } = useContext(CardContextCart)






    return (
        <>
            <section class="bg-gray-100 p-10">
                <div class="container px-5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">


                    <div class="lg:col-span-2 bg-white p-6 rounded shadow">
                        <h2 class="text-xl font-semibold mb-4">Shopping Cart</h2>

                        <div class="grid grid-cols-5 text-sm text-gray-500 border-b pb-2  border-b-black-300 ">
                            <div class="col-span-2">Products</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Sub-total</div>
                        </div>


                        <div>
                            {
                                cart.map((el) => (
                                    <div class="grid grid-cols-5 items-center py-4 border-b border-b-black-300">
                                        <div class="col-span-2 flex items-center gap-4">
                                            <img class="w-20 rounded" src={el.thumbnail} alt="" />
                                            {/* <img src="https://via.placeholder.com/80" class="w-20 rounded"> */}
                                            <p class="text-sm font-medium">
                                                {el.title}
                                            </p>
                                        </div>
                                        <div class="text-gray-500 line-through">${el.price}</div>
                                        <div class="flex items-center border border-gray-300 rounded-md overflow-hidden w-[110px] h-[36px]">
                                            <button
                                                onClick={() => minus(el)}
                                                class="w-8 h-full flex cursor-pointer items-center justify-center text-gray-500 hover:bg-gray-100">
                                                −
                                            </button>

                                            <span class="flex-1 text-center text-sm font-medium text-gray-700">
                                                {el.qty}
                                            </span>

                                            <button
                                                onClick={() => plus(el)}
                                                class="w-8 h-full flex cursor-pointer items-center justify-center text-gray-500 hover:bg-gray-100">
                                                +
                                            </button>
                                        </div>

                                        <div class="font-semibold">${(el.price * el.qty).toFixed(2)}</div>
                                    </div>
                                ))
                            }

                        </div>







                        <div class="flex justify-between mt-6">
                            <Link to={"/"} class="border px-6 py-2 text-blue-500 flex items-center gap-2">
                                ← Return to Shop
                            </Link>
                            <button class="border px-6 py-2 text-blue-500">
                                Update Cart
                            </button>
                        </div>
                    </div>


                    <div class="space-y-6">

                        <div class="bg-white p-6 rounded shadow">
                            <h3 class="font-semibold mb-4">Cart Totals</h3>

                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Sub-total</span>
                                    <span>

                                         ${
                                            Number(
                                                cart
                                                    .reduce((sum, el) => {
                                                        const discountedPrice =
                                                            el.price - (el.price * el.discountPercentage) / 100
                                                        return sum + discountedPrice * el.qty
                                                    }, 0)
                                                    .toFixed(2)
                                            )
                                        }

                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Shipping</span>
                                    <span class="text-green-500">Free</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Discount</span>
                                    <span>${
                                        Number(
                                            cart
                                                .reduce((sum, el) => {
                                                    const discountAmount =
                                                        (el.price * el.discountPercentage) / 100
                                                    return sum + discountAmount * el.qty
                                                }, 0)
                                                .toFixed(2)
                                        )
                                    }
</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Tax</span>
                                    <span>$61.99</span>
                                </div>
                            </div>

                            <div class="flex justify-between font-semibold border-t mt-4 pt-4">
                                <span>Total</span>
                                {
                                    cart
                                        .reduce((sum, el) => sum + el.price * el.qty, 0)
                                        .toFixed(2)
                                }

                            </div>

                            <button class="w-full mt-6 bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
                                PROCEED TO CHECKOUT →
                            </button>
                        </div>


                        <div class="bg-white p-6 rounded shadow">
                            <h3 class="font-semibold mb-4">Coupon Code</h3>
                            <input
                                type="email"
                                placeholder="Email address"
                                class="w-full border px-3 py-2 mb-4 rounded"
                            />
                            <Link to={"/order"} class="w-full bg-blue-500 text-white py-2  px-8 rounded hover:bg-blue-600">
                                APPLY COUPON
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Cartpage