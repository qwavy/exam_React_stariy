import React from "react";
import appStore from "./store/AppStore";
import { observer } from "mobx-react";

console.log(appStore);
// const apStore = [
//   [{name:'banan',price:50,category:'fruts'}],
//   {name:'phone',price:300,category:'smart'}
// ]
const apStore = {
  name: ["banan", "lol"],
  price: ["l", 300]
};
class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", searchedItems: apStore.name };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchText = event.target.value;
    this.setState({ value: searchText });
    if (typeof searchText === "string" && searchText.trim().length) {
      this.setState({
        searchedItems: apStore.name.filter((item) => {
          let matchesFilter = new RegExp(searchText, "i");
          return matchesFilter.test(item);
        })
      });
    } else {
      this.setState({ searchedItems: apStore.name });
    }
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          placeholder="Search"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ul>
          {this.state.searchedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default observer(SearchInput);