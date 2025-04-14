import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>PAGES</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>

        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate recusandae similique culpa reprehenderit amet quos, vel debitis. Delectus tempora voluptate voluptates voluptas aut exercitationem excepturi, accusamus obcaecati illo reiciendis?</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate recusandae similique culpa reprehenderit amet quos, vel debitis. Delectus tempora voluptate voluptates voluptas aut exercitationem excepturi, accusamus obcaecati illo reiciendis?</span>
        </div>

       
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>SHOPPERS</span>
          <span className='copyright'>@ copyright all right reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>


      </div>
    </div>
  )
}

export default Footer
