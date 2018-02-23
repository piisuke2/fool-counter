import React, { Component } from "react";
import styled from "styled-components";

const Font = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export default class Label extends Component {
  render() {
    return <Font>{this.props.children}</Font>;
  }
}
