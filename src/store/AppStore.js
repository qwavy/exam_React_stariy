import { makeAutoObservable } from "mobx";

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }
  // product = ['banan']
  products = [];
  isLogin = false;

  addProduct = (item) => {
    const data = { id: this.products.length + 1, ...item };
    this.products.push(data);
  };
  // handleRemove = (id) => {
  //     const res = appStore.products.filter((f, i) => i !== id);
  //     this.products(res)
  // }
  deleteProduct = (id) => {
    this.products?.filter((_, i) => i !== id);
  };
  // deleteProduct = (id) => {
  //     this.products.filter((f, i) => i !== id)
  // }

  get allPrices() {
    return this.products.reduce((acc, item) => acc + parseInt(item.price), 0);
  }
}

const appStore = new AppStore();

export default appStore;