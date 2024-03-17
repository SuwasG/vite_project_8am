import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(6)

  useEffect( ()=>{

    // define function 
        const fetchProducts = async ()=>{
          try{
            const productResponse = await axios.get('https://fakestoreapi.com/products')
            setProducts(productResponse.data)
            console.log(productResponse.data)
          }
          catch(error){
            console.log(error)
          }
        }

        // call the function
        fetchProducts()
  }, [])


  return (
    <>

<div class="container my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          
       {
        products && products.slice(0,limit).map((pr,ind)=>(
          <Card item={pr} key={ind} />
        ))
       }

      <div className="mx-auto">
        <div className="col-6">
          {
            limit<products.length && 
            <button className='btn btn-warning px-4 py-2' onClick={ ()=> setLimit(limit+3)  } >Load More</button>
          }
        </div>
      </div>


          </div>
          </div>
    </>
  )
}

export default Products