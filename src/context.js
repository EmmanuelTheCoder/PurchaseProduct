import React, {useState, useEffect} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();

function ProductProvider({children}) {
    const [getProduct, setGetProduct] = useState({
        products: [],
        detailProduct: detailProduct
    });
    
    useEffect(()=>{
        setProducts();
    },[])
    
const setProducts = () =>{
    let tempProducts = [];
    //console.log("temp product 0", tempProducts)
    storeProducts.forEach(item=>{
        //console.log("temp product 0.1", tempProducts)
        //console.log({...item})
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];

        //console.log("temp product", tempProducts)
        //tempProducts = [...tempProducts, {...item}]
        //console.log("temp product 2", tempProducts)
        

    });
    setGetProduct(()=>{
        return {...getProduct, products: tempProducts}
    });
}
const getItem = (id) =>{
    const product = getProduct.products.find(item=> item.id === id);
    return product;
}
const handleDetail = () =>{
    console.log("hello from detail")
}
const addToCart = (id) =>{
    console.log(`add to cart id is ${id}` )
}
// const tester = () =>{
//     console.log("state product" + getProduct.products[0].inCart);
//     console.log("data product" + storeProducts[0].inCart);

//     const tempProducts = [...getProduct.products];
//     tempProducts[0].inCart = true;

//     setGetProduct(()=> {
//         return {...getProduct, products: tempProducts}
//     }, ()=>{
//         console.log("state product" + getProduct.products[0].inCart);
//         console.log("data product" + storeProducts[0].inCart);
//     })
// }

    return (
        <ProductContext.Provider value={{
            
            ...getProduct, 
            handleDetail: handleDetail,
            addToCart: addToCart
            
        }}>
            {/* <button onClick={tester}>test me</button> */}
            {children}
        </ProductContext.Provider>
    );
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
