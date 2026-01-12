import React, { useContext } from 'react'
import { LikeProductsContext } from '../context/LikeContext'
import Cartlar from '../components/Cartlar'

const LikePage = () => {
  const { like } = useContext(LikeProductsContext)

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold mb-6">
         Like qilingan mahsulotlar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
        {like.map((el) => (
          <Cartlar  el={el} />
        ))}
      </div>
    </div>
  )
}

export default LikePage
