import React, {useState, useEffect} from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();


function ProductProvider({children}) {
    const [getProduct, setGetProduct] = useState({
        products: storeProducts,
        detailProduct: detailProduct 
    });
    
   
const handleDetail = () =>{
    console.log("hello from detail")
}
const addToCart = () =>{
    console.log("hello from add to cart")
}
    return (
        <ProductContext.Provider value={{
            
            ...getProduct, 
            handleDetail: handleDetail,
            addToCart: addToCart
        }}>
            {children}
        </ProductContext.Provider>
    );
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
