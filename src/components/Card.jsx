import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'
const Card = (props) => {

  // object destructuring
  const {title, description, image, price, id} = props.item
  return (
    <>
          
          <div class="col">
            <div class="card h-100">
              <img src={image} class="card-img-top img-fluid" alt={title}/>
              <div class="card-body">
                <h5 class="card-title"> {title} </h5>
                <p className='text-danger fw-bold'>Rs.{price}</p>
                <p class="card-text">{description.slice(0,50)}....</p>
                <Link to={`/product-details/${id}`} class="btn btn-warning text-dark px-4 py-2">View Details</Link>
              </div>
            </div>
          </div>

    </>
  )
}

export default Card