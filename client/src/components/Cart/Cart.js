import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

function Cart() {
    const products = useSelector(state =>state.cart.products);
    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price ;
           
        })
        return total;

    }


  return (
    <div className='cart'>
        <h3>Products in Your Carts</h3>
        {products.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        {item.quantity} * Rs.{item.price}
                    </div>

                </div>
                <DeleteIcon className='delete' onClick ={() => dispatch(removeItem(item.id))}  />
            </div>
        ))}
        <div className="total">
            <span>SubTotal </span>
            <span> Rs.{totalPrice()}</span>
           

        </div>
        <button>Procceed To Checkout</button>
        <span className='reset'  onClick ={() => dispatch(resetCart())}>Reset Cart</span>
       
        
        
       

    </div>
  )
}

export default Cart