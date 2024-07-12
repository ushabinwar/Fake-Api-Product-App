import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { ProductContext } from '../utils/Context'



const Details = () => {
   const navigate = useNavigate()
  const [products, setproducts] = useContext(ProductContext)
  const [product, setproduct] = useState(null)
  const {id} =  useParams()
  // console.log(id)

  // const getSingleProduct = async ()=>{
  //   try{
  //     const {data} = await axios.get(`/products/${id}`)
  //     // console.log(data)
  //     setproduct(data)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    if(!product){
      setproduct(products.filter((p)=>p.id == id)[0])
    }
    // getSingleProduct()
  }, [])

  const productDeleteHandler = (id)=>{
   const filteredProducts = products.filter((p)=>p.id !== id);
   setproducts(filteredProducts)
   localStorage.setItem("products", JSON.stringify(filteredProducts))
   navigate("/")
  }
 

  return (product ? (
    <div className='  flex h-full justify-between items-center  w-[80%] p-[10%]   m-auto'>
    <img className='  object-contain h-[80%] w-[40%]' src={`${product.image}`} alt="" />
    <div className='content font-medium  w-[50%] '>
        <h1 className='text-4xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-5'>{product.category}</h3>
        <h2 className='text-red-400 mb-3'>${product.price}</h2>
        <p className=' font-medium mb-8'>{product.description} </p>
        <Link to={`/edit/${product.id}`} className='px-6 py-3 mr-7 border rounded-md  text-[2.25vh] font-medium border-blue-400 text-blue-400'>Edit</Link>
        <button onClick={()=> productDeleteHandler(product.id)} 
        className='px-4 py-3 border rounded-md  text-[2.25vh] font-medium border-red-400 text-red-400'>Delete</button>
    </div>
    </div>
  ):(
    <Loading/>
  )
   
  )
}

export default Details