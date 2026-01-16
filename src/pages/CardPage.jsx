import React, { useContext } from 'react'
import { CardContextCart } from '../context/CardContext'
import Cartlar from '../components/Cartlar'

const CardPage = () => {
  const { cart } = useContext(CardContextCart)

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold mb-6">
        karzinka qilingan mahsulotlar
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Hozircha mahsulot yo‘q
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
          {cart.map((el) => (
            <Cartlar key={el.id} el={el} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CardPage
