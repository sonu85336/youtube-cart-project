import React,{useEffect, useState} from 'react';
import '../styling/Cart.css';


const Cart =(props)=>{
    const [price,setPrice]=useState(0)

    const handlePrice=()=>{
        let ans =0;
        props.cart.map((item)=>(
            ans += item.amount*item.price
        ))
        setPrice(ans)
    }
const handleRemove =(id)=>{
    const arr = props.cart.filter((item)=>item.id != id);
    props.setCart(arr)
}
 useEffect(()=>{
    handlePrice()
 })

    return (
        <article>
{props.cart.map((item)=>(
    <div className='cart_box'  key={item.id}>
        <div className='cart_img'>
            <img src={item.img}/>
            <p>{item.title}</p>
        </div>
        <div>
      <button onClick={()=>props.handleChange(item,+1)}>+</button>
      <button>{item.amount}</button>
      <button onClick={()=>props.handleChange(item,-1)}>-</button>
    </div>
    <div>
        <span>{item.price}</span>
        <button  onClick={()=>handleRemove(item.id)}>Remove</button>
    </div>
    </div>
))

}<div  className='total'>
    <span>Total Price of Your Cart</span>
    <span>Rs - {price}</span>
</div>

        </article>
     
    )
}
export default Cart;