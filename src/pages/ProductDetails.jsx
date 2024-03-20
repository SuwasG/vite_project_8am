import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const params = useParams()

    const id = params.productID
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id} `)
        .then(res=>setProduct(res.data))
        .catch(err=> console.log(err))
    }, [id])


    const addToCart=()=>{
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const productItem = {
        id: product.id,
        title:product.title,
        price:product.price,
        category:product.category ,
        rating: product.rating,
        quantity: 1
      }

      const existingItem = cartItems && cartItems.find(item=> item.id === productItem.id)

      if (existingItem){
        toast.error("Product is already in the cart.")
      }
      else{
        cartItems.push(productItem)
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        toast.success(`${productItem.title} is added to the cart.`)
      }
    }

  return (
    <>

    <Helmet>
      <title>{product.title}</title>
    </Helmet>

    <ToastContainer theme='colored' autoClose={1000} position='top-center' />

  <div className="container my-3">
        <div className="row d-flex justify-content-evenly align-items-center shadow">

          <div className="col-md-4">
            <img src={product.image} alt={product.title} width={'400'} />
          </div>

          <div className="col-md-6">
            <h1 className="text-muted">{product.title}</h1>
            <h2>Rs: {product.price}</h2>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>

            <div className="my-2">
              <button className="btn btn-warning" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetails