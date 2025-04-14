import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

function Card({item}) {
  return (
    <Link  className = "link"to = {`/product/${item.id}`} >
         <div className="card">
            <div className="image">
               {item?.isNew && <span>New Season </span>}
                <img src={process.env.REACT_APP_UPLOAD_URL+item.img?.url}  className= "mainImg" alt="" />
                <img src={process.env.REACT_APP_UPLOAD_URL+item.img2?.url}  className= "secImg" alt="" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>Rs.{item.oldPrice || item.price + 20}</h3>
                <h3>Rs.{item.price}</h3>

            </div>
         </div>
        

    </Link>
  )
   
}

export default Card