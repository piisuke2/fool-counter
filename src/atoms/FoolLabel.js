import React, { Component } from "react";
import styled from "styled-components";

const Font = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  color: #bf0000;
`;

export default class FoolFont extends Component {
  render() {
    return <Font>{this.props.children}</Font>;
  }
}
