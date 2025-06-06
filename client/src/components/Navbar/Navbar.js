import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


function Navbar() {
  const products = useSelector(state =>state.cart.products);
  const[open,setOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className="wrapper">
       <div className='left'>
        <div className="item">
        <img src="/img/in.png" alt="" />
        <KeyboardArrowDownIcon/>
        </div>
        <div className="item">
        <span>IN</span>
        <KeyboardArrowDownIcon/>
        
       </div>
       <div className="item">
        <Link className= 'link' to = "products/1">Women</Link>
       </div>
       <div className="item">
        <Link  className= 'link'to = "products/2">Men</Link>
       </div>
       <div className="item">
        <Link className= 'link' to = "products/3">Children</Link>
       </div>
     </div>
     <div className='center'>
     <div className="item">
        <Link  className= 'link'to = "">SHOPPERS</Link>
       </div>
     </div>
     <div className='right'>
       <div className="item">
        <Link className= 'link' to = "/">Home</Link>
       </div>
       <div className="item">
        <Link  className= 'link'to = "">About</Link>
       </div>
       <div className="item">
        <Link  className= 'link'to = "/">Contact</Link>
       </div>
       <div className="item">
        <Link className= 'link' to = "/">Stores</Link>
       </div>
       <div className="icons">
        <SearchIcon/>
        <PersonOutlineIcon/>
        <FavoriteBorderIcon/>
          <div className="cartIcon" onClick={() => setOpen(!open)}>
          <ShoppingCartIcon/>
          <span>{products.length}</span>

          </div>
        
        

       </div>
     </div>

     </div>
     {open && <Cart/> }
    
    </div>
  )
}

export default Navbar