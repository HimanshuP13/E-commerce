import React, { useState } from 'react'
import "./Product.scss"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';


function Product() {
  const id = useParams().id

  const[selectedImg,setSelectedImg] = useState("img");
  const[title,setTitle] =useState("Alamode Label Mariana Vintage Hollow out Midi Dress");
  let[quantity,setQuantity] = useState(1);
  const dispatch = useDispatch()


  
  const {data,loading ,error} = useFetch(`/products?populate=*`);
  const product = data?.find((item) => item.id === Number(id));

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading product or product not found.</div>;
  // const product = data;
  console.log("here")
  console.log(data);
  return (
    <div className='product'>
       <div className="left">
        {/* Image thumbnails */}
        <div className="images">
          {product.img?.url && (
            <img
              src={process.env.REACT_APP_UPLOAD_URL + product.img.url}
              alt={product.title}
              onClick={() => setSelectedImg("img")}
            />
          )}
          {product.img2?.url && (
            <img
              src={process.env.REACT_APP_UPLOAD_URL + product.img2.url}
              alt={product.title}
              onClick={() => setSelectedImg("img2")}
            />
          )}
        </div>
        {/* Main image */}
        <div className="mainImg">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              (product[selectedImg]?.url || product.img?.url)
            }
            alt={product.title}
          />
        </div>
      </div>

        
      <div className="right">
        <h3>{product.title}</h3>
        <span className='price'>Rs.{product.price}</span>
        <p>{product.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev )=> (prev === 1 ? 1 : prev -1 ))}><RemoveIcon/></button>
          
       <span >{quantity}</span>
       <button onClick={() => setQuantity(prev => prev +1)}><AddIcon/></button>
          
        </div>
        <button className='add' onClick={() => dispatch(addToCart({
          id : product.id,
          title : product.title,
          desc : product.desc,
          price:product.price,
          img : product.img?.url,
          quantity
        }))}> <AddShoppingCartOutlinedIcon/> Add to Cart</button>
        <div className="icons">
          <div className="items">
          <FavoriteBorderOutlinedIcon/> Add to WishList

          </div>
          <div className="items"> 
            <BalanceIcon/> Compare

          </div>
         
        </div>
        <div className="productInfo">
          <span>Vendor : Gucci </span>
          <span>Product Type : Midi Dress</span>
          <span> Tag : Women ,Fancy New</span>
        </div>
        <hr />
        
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
       
    </div>
   
  )
}

export default Product