import React, { useEffect, useState } from 'react'
import useGet from '../Hook/useGet'
import Cartlar from '../components/Cartlar'
import axios from 'axios'

const ProductsPage = () => {

  const [limit, setLimit] = useState(20)
  const [skip, setSkip] = useState(0)
  const[total , setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [active , SetActive] = useState(1)
  const [category, setCategory] = useState("")

  const {data} = useGet({url:"products/category-list"})
  const categories = data.data
 
  
console.log(category);


  const pageNumbers = []

  async function getData(){
    try {
      const res = await axios.get(`https://dummyjson.com/products/${category ? `category/${category}` : ""}?limit=20&skip=${skip}`);
      setProducts(res?.data?.products)
      setTotal(res.data.total)


    } catch (err) {
      console.log(err);

    }
  }
  console.log(products);
  

useEffect(() =>{
getData()
}, [skip , category])

  const countPagination = Math.ceil(total / 20)


  for (let i = 1; i <= countPagination; i++) {
    pageNumbers.push(i)
  }





  return (
    <>
      <section className='pt-[30px]'>

        <div className='container  mx-auto p-5'>
          <aside className='max-w-[312px] fixed top-[76px]  w-full pt-[160px] bg-[white]  '>
            <div className='px-5'>
              <h1 className='text-[24px] font-bold'>Category </h1>
              <ul className='mt-5 flex flex-col gap-2  h-[550px] overflow-y-scroll pb-[50px]'>
               {
                categories?.map((el)=>(
                  <li className='flex gap-3'>
                    <input name='cat' className='w-[30px] ' id={el} type="radio" value={el} onChange={(e)=> setCategory(e.target.value)} />
                    <label className='text-[18px]  font-bold' htmlFor={el}>
                      {el}
                    </label>
                  </li>
                ))
               }
             
              </ul>
            </div>
          </aside>
          <div className='pl-[332px] grid grid-cols-4 gap-5 pb-[20px]'>
            {
              products?.map((el) => (
                <Cartlar el={el} />
              )
              )
            }
          </div>
          <div className='flex items-center justify-center mt-5 gap-2 '>
            {
              skip === 0 ? "" : <button
                onClick={() => setSkip((prev) => prev - 20)}
                className='p-2 bg-amber-600 rounded-2xl cursor-pointer  text-white' >oldinga</button>
            }
            <ul className='flex items-center gap-2'>
              {
                pageNumbers?.map((el) => (
                  <li onClick={() => { setSkip(el * 20 - 20) }} className={`p-2 ${skip === el*20 -20 ? "bg-blue-600" : " bg-amber-600"} rounded-2xl cursor-pointer text-white`}>
                    {el}
                  </li>
                ))
              }
            </ul>
           {
              skip === 180 ? "" : <button

                onClick={() => setSkip((prev) => prev + 20)}
                className='p-2 bg-amber-600 rounded-2xl cursor-pointer  text-white'>orqaga</button>
           }
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage