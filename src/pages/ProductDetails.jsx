import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const params = useParams()

    const id = params.productID
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id} `)
        .then(res=>setProduct(res.data))
        .catch(err=> console.log(err))
    }, [id])

  return (
    <>


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
              <button className="btn btn-warning" >Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetails