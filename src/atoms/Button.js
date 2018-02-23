import React, { Component } from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

const StyledButton = styled(RaisedButton)`
  margin: 20px;
`;

export default class Button extends Component {
  render() {
    return (
      <StyledButton
        label={this.props.label}
        onClick={this.props.onClick}
        primary
      />
    );
  }
}
