import { observer } from "mobx-react";
import React from "react";
import "./Profile.css"
// import appStore from "./store/AppStore";
// import Profilepop from "./Profilepop"
const user = {name:'ALi', age: 22,mail:'ali2000@gmail.com'}
class Profile extends React.Component {
    state = {
        seen: false
    }
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        })
    }
    cancelPlan = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    renderPopup = () => {
        return (
          <div className="popup">
            <div className="popup_inner">
              <p>name {user.name}</p>
              <p>age {user.age}</p>
              <p>mail {user.mail}</p>
              <button onClick={this.cancelPlan}>Close</button>
            </div>
          </div>
        );
      };
    render() {
        return (
            <div>
            <h1> Profile </h1>
            <button onClick={this.togglePop}> open/close</button>
            {this.state.seen ? this.renderPopup() : null}
          </div>
        )
    }
}
export default observer(Profile)