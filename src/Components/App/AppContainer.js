import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
// .env 에서 NODE_PATH 를 'src' 로 설정했으므로, "../../store" 생략
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = id => {
      this.setState(curState => {
        const newState = delete curState.notifications[id];
        return newState;
      });
    };
    this._seeNotification = id => {
      this.setState(curState => {
        return {
          ...curState,
          notifications: {
            ...curState.notifications,
            [id]: {
              ...curState.notifications[id],
              seen: true
            }
          }
        };
      });
    };
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "something",
          seen: false
        },
        "2": {
          id: 2,
          text: "else",
          seen: false
        },
        "3": {
          id: 3,
          text: "dif",
          seen: false
        }
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification
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
