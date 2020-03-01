import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
// .env 에서 NODE_PATH 를 'src' 로 설정했으므로, "../../store" 생략
import Store from "store";

class AppContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <AppPresenter />
      </Store.Provider>
    );
  }
}
