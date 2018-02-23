import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Image } from "atoms";
import styled, { keyframes } from "styled-components";

function rotationBuilder(degree) {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-${degree}deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(${degree}deg);
    }
  `;
  return rotation;
}

const Animation = styled.div`
  margin-top: 50px;
  animation: ${rotationBuilder(40)} 0.8s linear infinite;
`;

@inject("counterStore")
@observer
export default class Nabe extends Component {
  render() {
    const store = this.props.counterStore;
    return (
      <Animation>
        <Image file={store.isFool ? "nabe-maru.jpg" : null} />
      </Animation>
    );
  }
}
