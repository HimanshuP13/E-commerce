import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories'>
        <div className="left">
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/buyers-couple-shopping-using-cellphone-600nw-2116844222.jpg" alt="" />
                <button>
                    <Link  to ="/products/1"className='link' >Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://images.meesho.com/images/products/343641627/wes5e_1200.jpg" alt="" />
                <button>
                    <Link  to ="/products/1"className='link' >Women</Link>
                </button>
            </div>
        </div>
        <div className="center">
            <div className="row">
            <img src="https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289_640.jpg" alt="" />
                <button>
                    <Link  to ="/products/1"className='link' >Men</Link>
                </button>
            </div>
        </div>
        <div className="right">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link  to ="/products/1"className='link' >Children</Link>
                </button>
                    </div>
                    
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.meesho.com/images/products/386595388/n1vje_512.webp" alt="" />
                <button>
                    <Link  to ="/products/1"className='link' >Fancy</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg" alt="" />
                <button>
                    <Link  to ="/products/1"className='link' >Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories