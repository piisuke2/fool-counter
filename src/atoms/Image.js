import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const { file } = this.props;
    return file ? <img src={file} alt={file} /> : null;
  }
}
