import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Label, FoolLabel } from "atoms";

@inject("counterStore")
@observer
export default class Number extends Component {
  render() {
    const store = this.props.counterStore;
    return store.isFool ? (
      <FoolLabel>{store.count}</FoolLabel>
    ) : (
      <Label>{store.count}</Label>
    );
  }
}
