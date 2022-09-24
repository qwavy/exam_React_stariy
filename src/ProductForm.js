import {makeAutoObservable} from "mobx";
import {useState} from "react";
import {observer} from "mobx-react";
import appStore from "./store/AppStore";

class Product {
    constructor() {
        makeAutoObservable(this)
    }

    form = {name: '', price: ''}

    onChange = (field, value) => {
        this.form[field] = value;
    }

    submit = () => {
        appStore.addProduct(this.form)
        console.log(appStore.products)
    }
}

const ProductForm = observer(() => {
    const [product] = useState(new Product())

    return (
        <div>
            <h1>Form</h1>
            <input name="name" onChange={
                ({target: {value}}) => product.onChange('name', value)
            }/>
            <input name="price" onChange={
                ({target: {value}}) => product.onChange('price', value)
            }/>
            <button onClick={product.submit}>Add Product</button>
        </div>
    )
})

export default ProductForm;