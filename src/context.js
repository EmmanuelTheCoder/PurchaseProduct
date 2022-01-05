import React, {useState, useEffect} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();

function ProductProvider({children}) {
    const [getProduct, setGetProduct] = useState({
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0 
    });
    
    useEffect(()=>{
        setProducts();
    },[]);
    
const setProducts = () =>{
    let tempProducts = [];

    storeProducts.forEach(item=>{
        
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];

        console.log("single items", singleItem)
        
    });
    
    setGetProduct(()=>{
        return {...getProduct, products: tempProducts}
    });
}
const getItem = (id) =>{
    const product = getProduct.products.find(item=> item.id === id);
    return product;
}
const handleDetail = (id) =>{
    const product = getItem(id);
    setGetProduct(()=>{
        return {...getProduct, detailProduct: product}
    });
}
const addToCart = (id) =>{
    let tempProducts = [...getProduct.products];
    const index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    
    setGetProduct(()=>{
        return {...getProduct, products: tempProducts, cart:[...getProduct.cart, product]};

    });
    //console.log("checking cart product", getProduct.cart)
}
const openModal = (id) =>{
    const product = getItem(id);

    let tempProducts = [...getProduct.products];
    const index = tempProducts.indexOf(getItem(id));
    let cartProduct = tempProducts[index];
    cartProduct.inCart = true;
    cartProduct.count = 1;
    const price = cartProduct.price;
    cartProduct.total = price;
    setGetProduct(()=>{
        return {...getProduct, modalProduct: product, modalOpen: true, products: tempProducts, cart:[...getProduct.cart, cartProduct]}
    })
}
const closeModal = () =>{
    setGetProduct(()=>{
        return {...getProduct, modalOpen: false}
    })
}
const increment = (id) =>{
    console.log("increment method")
}
const decrement = (id) =>{
    console.log("decrement method")
}
const removeItem = () =>{
    console.log("item removed");
}
const clearCart = () =>{
    console.log("cart cleared.")
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
            addToCart: addToCart,
            openModal: openModal,
            closeModal: closeModal,
            increment: increment,
            decrement: decrement,
            removeItem: removeItem,
            clearCart: clearCart
            
            
        }}>
            {/* <button onClick={tester}>test me</button> */}
            {children}
        </ProductContext.Provider>
    );
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
