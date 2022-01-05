import React from 'react'
import CartItems from './CartItems';


export default function Cartlist({value}) {
    
    const {cart} = value;
    console.log("carty cart cart", cart);

    return (
      <div className="container-fluid">
          {cart.map(item =>{
              return <CartItems  key={item.id} item={item} value={value}/>
          })}
          
      </div>  
    )
}
