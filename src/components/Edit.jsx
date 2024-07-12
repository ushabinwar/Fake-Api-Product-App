import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
    const navigate =  useNavigate()
    const [products, setproducts] = useContext(ProductContext)
    const {id} = useParams()
   
    const [product, setproduct] = useState({
      title:"",
      image:"",
      price:"",
      category:"",
      description:"",
    })
    const changeHandler =(e)=>{
      // console.log(e.target.name, e.target.value)
      setproduct({...product, [e.target.name]: e.target.value})

    }



    const AddedProductHandler = (e)=>{
      e.preventDefault()

      if(
        product.title.toString().trim().length < 4 ||
        product.image.toString().trim().length < 4 ||
        product.price.toString().length < 1 ||
        product.category.toString().trim().length < 4 ||
        product.description.toString().trim().length < 4 
      ) {
        alert("Each and every input atleast have 4 characters");
        return;
      }

      const pi = products.findIndex((p)=> p.id == id)
      const copyData = [...products]
      copyData[pi] = {...products[pi], ...product} 
      // console.log(copyData)
      
      setproducts(copyData)
      localStorage.setItem("products", JSON.stringify(copyData))
      navigate(-1)
      //  console.log(copyData)
    }
   
    
    
    useEffect(() => {
      setproduct(products.filter((p)=> p.id == id)[0])
      
    }, [id])
   
  return (
    <form onSubmit={AddedProductHandler} className=' flex flex-col w-screen  items-center h-screen p-[5%]  pt-[14vh]' >
    <h1 className='text-4xl w-1/2 mb-5 font-medium'>Edit Product</h1>
    <input 
      type="url" 
      placeholder='Image Link'
      className='bg-zinc-100 text-[2.7vh] mb-3 rounded-md p-2 w-1/2 border'
      onChange={changeHandler}
      name='image'
      value={product && product.image}
    />
    <input 
      type="text" 
      placeholder='Title'
      className='bg-zinc-100 text-[2.7vh]  mb-3 rounded-md p-2 w-1/2 border'
      onChange={changeHandler}
      name='title'
      value={product && product.title}
    />
    
    <div className='flex justify-between w-1/2'>
    <input 
      type="text" 
      placeholder='Category'
      className='bg-zinc-100 text-[2.7vh] mb-3 rounded-md p-2 w-[49%] border'
      onChange={changeHandler}
      name='category'
      value={product && product.category}
    />
    <input 
      type="Number" 
      placeholder='Price'
      className='bg-zinc-100 text-[2.7vh] mb-3 rounded-md p-2  w-[49%] border'
      onChange={changeHandler}
      name='price'
      value={product && product.price}
    />
    </div>
    <textarea  
      value={product && product.description}
      onChange={changeHandler}
      name='description'
      placeholder='Enter description here....'
      className='bg-zinc-100 text-[2.7vh]  mb-3 rounded-md p-2 w-1/2 border' rows="6">
    </textarea>
   <div className='w-1/2'>
   <button className='px-5 py-3 border rounded-md  text-[2.25vh] font-medium border-blue-400 text-blue-400'>
     Edit Product
    </button>
   </div>
    
     

    
</form>
  )
}

export default Edit