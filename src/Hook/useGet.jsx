import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify/unstyled';

const useGet = ({ url }) => {

const [loading ,setLoading] = useState(true)
const[data , setData] = useState([])


 async    function getData (){
    try{
        let res = await axios.get(`https://dummyjson.com/${url}`)
        setData(res)
        
        
    }catch(err){
console.log(err);
toast.error(err)

    }finally{
        setLoading(false)
    }





}
useEffect(()=>{
getData()
},[])

  return {data , loading ,getData }
}

export default useGet