import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'


const Nav = () => {
  const [products] = useContext(ProductContext)
  // console.log(products)

  let distinct_category = products && products.reduce((acc, cv)=>[...acc, cv.category],[])
  distinct_category = [...new Set(distinct_category)] // Set matlab unique elements ka collection
  // console.log(distinct_category)

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  }
 

  return (
    <>
    <nav className='w-[17%] bg-zinc-100 h-full flex flex-col  items-center pt-5'>
    <a className='px-5 py-3 border rounded-md  text-[2.25vh] font-medium border-blue-400 text-blue-400' href="/create">Add New Product</a>
    <hr className=' my-3 w-[80%]' />
    <h1 className=' text-2xl w-[80%] font-medium mb-3'>Category Filter</h1>
    <div className=' w-[80%] text-lg font-medium mt-2'>
      {distinct_category.map((c,i) =>(
        <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center'>  
        <span style={{backgroundColor:color()}} className='h-[20px] w-[20px]    rounded-full mr-3'></span>
         {c}
        </Link>
      ))}
      
     
    </div>
  </nav>
  </>
  )
}

export default Nav