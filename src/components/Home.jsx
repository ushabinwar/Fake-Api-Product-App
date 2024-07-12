import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
  const [products] = useContext(ProductContext)
  const {search} = useLocation()
  const category = decodeURIComponent(search.split("=")[1]) // decodeURIComponent ka kaam hota hai jo use data mil rha hai params se use ye string me convert kr de
  // console.log(category)   

 
  const [filterproducts, setfilterproducts] = useState(null)
  

  // const getproductscategory = async()=>{
  //   try{
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     setfilterproducts(data)
  //     // console.log(data)
  //   }catch(error){
  //     console.log(error)

  //   }
  // }

  useEffect(() => {
    if (!filterproducts || category == "undefined") setfilterproducts(products)
    if(category != "undefined"){
      // getproductscategory()
      setfilterproducts(products.filter((p)=>p.category == category))
    }
  }, [category, products])
  
 
  return (products ?(
    <>
    <Nav/>
    <div className='w-[83%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>
        
        
        {filterproducts && filterproducts.map((p,i)=>( 
          <Link to={`/details/${p.id}`} key={p.id} className='mr-3 mb-3 card p-4 shadow rounded border w-[18%] h-[40vh] flex-col flex justify-center items-center'>
          <div className=' hover:scale-110  duration-200 h-[90%]  w-full bg-contain bg-no-repeat bg-center mb-3'
            style={{backgroundImage: `url(${p.image})`}}>
          </div>
          <h1 className='font-medium text-sm  hover:text-blue-500 duration-150'>{p.title} </h1>
      </Link>
        ))}
       
       
      </div>
    </>
  ):(
      <Loading/>
    )
  )
}

export default Home