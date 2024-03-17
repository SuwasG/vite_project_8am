import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(       ()=>{

    // define function 
        const fetchProducts = async ()=>{
          try{
            const productResponse = await axios.get('https://fakestoreapi.com/products')
            setProducts(productResponse.data)
            console.log(productResponse.data)
            // http request methods: 
            // get -> to read or retrive data.
            // post -> to create
            // put -> to update
            // delete -> to delete
            // CRUD operation.

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
        products && products.slice(0,6).map((pr,ind)=>(
          <Card item={pr} key={ind} />
        ))
       }

          </div>
          </div>
    </>
  )
}

export default CardContainer