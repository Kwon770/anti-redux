import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
// .env 에서 NODE_PATH 를 'src' 로 설정했으므로, "../../store" 생략
import Store from "store";

class AppContainer extends Component {
  state = {
    message: "Hello"
  };
  // store 에 저장된 state 는 변경될때 마다 적용됨
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: "bye"
      });
    }, 2000);
  };
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
