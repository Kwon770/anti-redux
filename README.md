# Anti Redux | Context API (store)

## Creating the store

```js
import React from "react";

const Store = React.createContext(null);

export default Store;
```

## Consuming the store

### Save data

&#60;Store.Provider value={data}&#62;&#60;/&#62; : store 에 data 저장

```js
import Store from "store";

class Container extends Component {
  state = {
    message: "Hello"
  };
  // store 에 저장된 state 는 변경될때 마다 사용 위치에 적용됨
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: "bye"
      });
    }, 2000);
  };
  render() {
    // Store 에 value 의 data 저장
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}
```

### Use data

&#60;Store.Consumer&#62;{store => ()&#60;/&#62; : store의 props 에 접근

```js
import Store from "store";

const Presenter = () => {
  <Title>
    <Store.Consumer>{store => store.message}</Store.Consumer>
  </Title>;
};
```

## Updating the store

### Provider.js

```js
class Container extends Component {
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
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}
```

### Consumer.js

```js
const Presenter = () => (
  <Fragment>
    <Store.Consumer>
      {store => <Button success seen={seen} onClick={store.changeMsg} />}
    </Store.Consumer>
  </Fragment>
);
```
