import appStore from "./store/AppStore";
import React, { useState, useReducer } from "react";
// import handleRemove from "./store/AppStore"
import { observer } from "mobx-react";
// import { action } from "mobx";
// import ProductForm from "./ProductForm";

const ProductList = observer(() => {
    // const [appStore, setAppstore] = useState()
    // function handleRemove(id){
    //     const res = appStore.products.filter((f, i) => i !== id);
    //     appStore(res)
    //     // .filter(item => item !== id)
    // }
    // const submit = () =>{
    //     appStore.deleteProduct(this.products)
    // }
    const [items, setItems] = useState([
        { name: 'banan', price: 150, count: 1 },
        { name: 'fortnite batlle pas', price: 1000, count: 1 }
    ])
    const addHandler = (item) => {
        const newItems = [...items]
        const index = newItems.indexOf(item)
        newItems[index] = { ...item };
        newItems[index].count++;
        setItems(newItems);
        console.log(newItems)
    }
    return (
        <div>
            <h2>Product List</h2>
            {items.map(item => <div key={item.id}>
                <h5>{item.name}</h5>
                <button onClick={() => addHandler(item)}>add to cart</button>
            </div>)}


            {appStore.products.map(item => <div key={item.id}>
                <h3>{item.name} - {item.price}</h3>
                <button onClick={appStore.deleteProduct(item.id)}>deleteItem</button>
                {/* <button onClick={() => appStore.products.remove()}>deleteItem</button> */}


            </div>)}

            <h5>All: {appStore.allPrices}</h5>
            <h1>Cart</h1>
            <p>cart item price</p>
                {items.reduce((a, c) => {
                return a + c.price * c.count
            }, 0)}
            <p>cart item amount:</p>
          {items.reduce((a, c) => {
                return a + c.count;
            }, 0)}
        </div>
    )
})

export default ProductList;