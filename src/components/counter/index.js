import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { Button } from "atoms";
import styled from "styled-components";
import Nabe from "./Nabe";
import Number from "./Number";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export class CounterStore {
  @observable count = 1;

  @computed
  get isFool() {
    return this.count % 3 === 0 || String(this.count).indexOf("3") !== -1;
  }

  @action.bound
  countup() {
    this.count += 1;
  }
}

@inject("counterStore")
@observer
export default class Counter extends Component {
  render() {
    const store = this.props.counterStore;
    return (
      <div>
        <Center>
          <Button label="カウントアップ" onClick={() => store.countup()} />
        </Center>
        <Center>
          <Number />
        </Center>
        <Center>
          <Nabe />
        </Center>
      </div>
    );
  }
}
