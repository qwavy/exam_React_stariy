import React from "react";
import { useState } from "react";
import appStore from "./store/AppStore";
import ProductList from "./ProductList";
// import items from "./Items"
console.log(appStore.products)
export default function ProductFilter() {
    const [lower, setLower] = useState();
    const [upper, setUpper] = useState();
    const [items, setItems] = useState([
        { name: 'banan', price: 10, count: 1 },
        { name: 'fortnite batlle pas', price: 1000, count: 1 }
    ])
    const handleInput = (e) => {
        setPrice(e.target.value);
    }
    const [price, setPrice] = useState(40);
    return (
        <>
            <h1>Filter</h1>
            <div>
                <input type="range" onInput={handleInput} />
                <h3>Price: {price}</h3>
                <h3>products list</h3>
                <div>
                    {items.filter(hotel => { return hotel.price > parseInt(price, 10) }).map(hotel => {
                        return <p key={hotel.name}>{hotel.name} | {hotel.price} &inr; </p>
                    })}
                </div>
            </div>

        </>
    )

}