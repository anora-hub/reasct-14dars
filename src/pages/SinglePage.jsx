import React from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../Hook/useGet';
import SweperCard from '../components/SweperCard';
import { GoStarFill } from 'react-icons/go';

const SinglePage = () => {
  const { id } = useParams();

  const { data, loading } = useGet({ url: `products/${id}` });

  if (loading) {
    return <div>Loading...</div>
  }

  const item = data?.data;

  return (
    <div className='  container pb-5 mx-auto py-5' >
      <div className='grid grid-cols-2'>
        <div>
          <SweperCard images={item.images} />
        </div>
        <div>

          <div class=" mx-auto px-6 py-10">
            <div class="">


              <div class="flex justify-center">






              </div>


              <div>

                <div className='flex items-center gap-8'>
                  <div>
                    <div class="flex items-center gap-2 text-sm mb-3">
                      <span class="text-yellow-400">★★★★★</span>
                      <span class="font-semibold">{item.rating} Star Rating</span>
                      <span class="text-gray-500">(21,671 user feedback)</span>
                    </div>


                    <h1 class="text-2xl font-semibold leading-snug mb-1">
                      {item.title}
                    </h1>
                  </div>
                  <div>
                    <img className='max-w-[80px]' src={item.meta.qrCode} alt="" />
                  </div>
                </div>
                <p className=' text-gray-600 text-[16px] italic py-2'>{item.description}</p>


                <div class="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
                  <span>SKU: <b>{item.sku}</b></span>
                  <span>Availability: <b class="text-green-600">{item.availabilityStatus}</b></span>
                  <span>Category: {item.category}</span>
                  <span>Brand: {item.brand}</span>
                </div>


                <div class="flex items-center gap-4 mb-8">
                  <span class="text-3xl font-bold text-blue-600">${item.price}</span>
                  <span class="line-through text-gray-400">${item.price - item.price * item.discountPercentage / 100}</span>
                  <span class="bg-yellow-100 text-yellow-700 text-sm font-medium px-2 py-1 rounded">
                    {item.discountPercentage}% OFF
                  </span>
                </div>





                <div class="flex flex-wrap items-center gap-4 mb-6">


                  <div class="flex items-center border cursor-pointer rounded">
                    <button class="px-3 py-2">-</button>
                    <span class="px-4">01</span>
                    <button class="px-3 py-2">+</button>
                  </div>

                  <button class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-3 rounded font-medium">
                    ADD TO CART
                  </button>

                  <button class="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded font-medium">
                    BUY NOW
                  </button>
                </div>


                <div class="flex gap-6 text-sm  mb-6">
                  <span class="cursor-pointer text-gray-600">♡ Add to Wishlist</span>
                  <span class="cursor-pointer text-gray-600">⇄ Add to Compare</span>
                  <span class="cursor-pointer text-gray-600">Share product</span>
                  <p className='font-bold text-[15px] '>Width:{item?.dimensions?.width}</p>
                  <p className='font-bold text-[15px] '>depth:{item?.dimensions?.depth}</p>
                  <p className='font-bold text-[15px] '>height:{item?.dimensions?.height}</p>
                </div>

                <div class="border-t pt-4">

                  <div className='flex items-center gap-8 py-2 cursor-pointer'>
                    <p class="text-sm font-medium ">100% Guarantee Safe Checkout</p>
                    {
                      item.tags.map((el) => (
                        <p className='  bg-gray-300 rounded-2xl px-[10px]  py-[5px]  font-bold text-[16px]'>{el}</p>

                      ))
                    }
                  </div>








                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {item.reviews.map((el) => (
          <div className='border-[2px] border-gray-400 rounded-2xl p-5'>
            <div className='flex items-start justify-between'>
              <div>
                <h1>{el.reviewerName}</h1>
                <span className='text-[14px] text-gray-500 '> {el.date.split("T")[0]} </span>
              </div>
              <div className=' flex items-center gap-1'>
                <p className='text-[18px] text-yellow-400'>{el.rating}</p>
                <GoStarFill className='text-yellow-400' />
              </div>
            </div>
           <div className='flex items-center gap-1'>
              <p className='font-bold'>izohlar:</p>
              <p>{el.comment}</p>
           </div>



          </div>
        ))
        }
      </div>

    </div>
  )
}

export default SinglePage;
