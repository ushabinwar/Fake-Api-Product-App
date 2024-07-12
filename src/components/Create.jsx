import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { json, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const create = () => {
    const navigate =  useNavigate()
    const [products, setproducts] = useContext(ProductContext)
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")


    const AddProductHandler = (e)=>{
      e.preventDefault()

      if(title.trim().length < 4 ||
         image.trim().length < 4 ||
         price.trim().length < 1 ||
         category.trim().length < 4 ||
         description.trim().length < 4 
      ) {
        alert("Each and every input atleast have 4 characters");
        return;
      }
      const product = {
        id : nanoid(),
        title,
        image,
        category,
        price,
        description,
      }
      setproducts([...products, product])
      localStorage.setItem("products", JSON.stringify([...products, product]))
      toast.success("Product Added Sucessfully")
      navigate('/')
    }

  return (
    
    <form onSubmit={AddProductHandler} className=' flex flex-col w-screen  items-center h-screen p-[5%] pt-[14vh] ' >
        <h1 className='text-4xl w-1/2 mb-5 font-medium'>Add New Product</h1>

        <input 
          type="url" 
          placeholder='Image Link'
          className='bg-zinc-100 text-[2.7vh] mb-3 rounded-md p-2 w-1/2 border '
          onChange={(e)=>{setimage((e.target.value))}}
          value={image}
        />
        <input 
          type="text" 
          placeholder='Title'
          className='bg-zinc-100 text-[2.7vh]  mb-3 rounded-md p-2 w-1/2 border'
          onChange={(e)=>{settitle((e.target.value))}}
          value={title}
        />
        
        <div className='flex justify-between w-1/2'>
        <input 
          type="text" 
          placeholder='Category'
          className='bg-zinc-100 text-[2.7vh] mb-3 rounded-md p-2 w-[49%] border'
          onChange={(e)=>{setcategory((e.target.value))}}
          value={category}
        />
        <input 
          type="Number" 
          placeholder='Price'
          className='bg-zinc-100 text-[2.7vh] mb-3 rounded-md p-2  w-[49%] border'
          onChange={(e)=>{setprice((e.target.value))}}
          value={price}
        />
        </div>
        <textarea  
          value={description}
          onChange={(e)=>{setdescription((e.target.value))}}
          placeholder='Enter description here....'
          className='bg-zinc-100 text-[2.7vh]  mb-3 rounded-md p-2 w-1/2 border' rows="6">
        </textarea>
        <div className='w-1/2'>
         <button className='px-5 py-3 border rounded-md  text-[2.25vh] font-medium border-blue-400 text-blue-400'>
          Add New Product
         </button>
       </div>
    </form>
  )
}

export default create