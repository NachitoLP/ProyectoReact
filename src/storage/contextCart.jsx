import React, {createContext, useState} from 'react';

const contextoApp = createContext([]);
const Provider = contextoApp.Provider;

export default function ContextCartProvider(props) {
    let [ cart, setCart ] = useState([]);
    let [ newCart, setNewCart] = useState([]);
    
    function cantidadCarrito() {
        return(cart.length)
    }
    
    function removeItem(product) {
        const itemFiltrado = cart.find((item) => item === product)
        const index = cart.indexOf(itemFiltrado);
        newCart = [...cart]
        if (index>-1) {
            cart.splice(index,1);
        }
        setNewCart(newCart);
    }

    function agregarCarrito(item,count) {
        let itemInCart = cart.findIndex (itemInContext => itemInContext.id === item.id)
        let isItemInCart = itemInCart !== -1;
        const newCart = [...cart];

        if(isItemInCart){
            newCart[itemInCart].count += count;
            setCart(newCart);
        }
        else{
            const newItem = item;
            newItem.count = count;
            newCart.push(newItem);
            setCart(newCart);
        }
    }

    const value = {
        cart,
        cantidadCarrito,
        agregarCarrito,
        removeItem,
    }

    return (
        <Provider value={value}>
            {props.children}
        </Provider>
    )
}


export {contextoApp};