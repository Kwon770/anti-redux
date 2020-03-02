import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
// .env 에서 NODE_PATH 를 'src' 로 설정했으므로, "../../store" 생략
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._changeMsg = () => {
      if (this.state.message === "Hello") {
        this.setState({
          message: "Bye"
        });
      } else {
        this.setState({
          message: "Hello"
        });
      }
    };
    this.state = {
      message: "Hello",
      changeMsg: this._changeMsg
    };
  }
  render() {
    // <store.provider value={}> : Store 에 value 의 data 저장
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
