import React, {useState} from "react";
import {makeAutoObservable, makeObservable} from "mobx";
import {observer} from "mobx-react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import SeacrhInput from "./SearchInput"
import ProductFilter from "./ProdcutFilter";
import Profile from "./Profile";
import FilterCategory from "./FilterCategory";
class Counter {
    constructor() {
        makeAutoObservable(this)
        // makeObservable(this,{
        //    counter:observable,
        //     increment:action
        // })
    }
    counter = 0

    increment = () => {
        this.counter++;
    }
    decrement = () => {
        this.counter--;
    }
    random = (rnd) => {
        this.counter += rnd
    }
}

const App = observer(() => {
    // const [counter] = useState(() => new Counter())

    return (
        <div>

            <Profile/>
            <ProductList/>
            <ProductForm />
            <SeacrhInput/>
            <ProductFilter/>
            <FilterCategory/>
        </div>
    )
})

export default App;

