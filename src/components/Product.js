import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

function Product(props) {
    
    const {id, title, img, price, inCart} = props.product;
    return (
       <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
           <div className="card">
               <div className="img-container p-5" onClick={()=>console.log("you clicked me on the image container")}>
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" 
                        disabled={inCart ? true : false}
                        onClick={()=>console.log("added to cart")}
                    >
                        {inCart ? (<p className="text-capitalize mb-0" disabled
                        >In cart</p>) : (<i className="fas fa-cart-plus" />)}
                    </button>
               </div>
           </div>
       </ProductWrapper>
    )
}
export default Product;

const ProductWrapper = styled.div`

`