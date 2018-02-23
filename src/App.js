import React, { Component } from "react";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Counter, { CounterStore } from "./components/counter";

useStrict(true);

export default class App extends Component {
  render() {
    return (
      <Provider counterStore={new CounterStore()}>
        <MuiThemeProvider>
          <Counter />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
