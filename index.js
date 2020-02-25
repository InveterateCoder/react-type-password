function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
export default class extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onInput", ev => {
      let ptr = ev.target.selectionStart;
      if (ev.inputType === "insertText" && ptr === this.state.ptr + 1) {
        this.setState({
          ptr: ptr
        }, () => this.props.onChange(this.props.value + ev.data));
      } else if (ev.inputType === "deleteContentBackward" && ptr === this.state.ptr - 1) {
        this.setState({
          ptr: ptr
        }, () => this.props.onChange(this.props.value.substring(0, this.props.value.length - 1)));
      } else if (ptr < 2 && ptr === ev.target.value.length) {
        this.setState({
          ptr: ptr
        }, () => this.props.onChange(ev.data || ""));
      } else {
        let fakeChar = this.props.mask && this.props.mask.length === 1 ? this.props.mask : "•";
        this.ref.current.value = this.state.type === "text" ? fakeChar.repeat(this.props.value.length) : this.props.value;
      }
    });

    this.state = {
      ptr: this.props.value ? this.props.value.length : 0,
      type: this.props.type === "password" ? "password" : "text"
    };
    this.ref = React.createRef();
  }

  render() {
    return React.createElement("input", {
      ref: this.ref,
      id: this.props.id,
      type: this.state.type,
      style: this.props.style,
      placeholder: this.props.placeholder,
      className: this.props.className,
      disabled: this.props.disabled
    });
  }

  componentDidUpdate() {
    let fakeChar = this.props.mask && this.props.mask.length === 1 ? this.props.mask : "•";
    this.ref.current.value = this.state.type === "text" ? fakeChar.repeat(this.props.value.length) : this.props.value;
  }

  componentDidMount() {
    let fakeChar = this.props.mask && this.props.mask.length === 1 ? this.props.mask : "•";
    this.ref.current.value = this.state.type === "text" ? fakeChar.repeat(this.props.value.length) : this.props.value;
    this.ref.current.addEventListener("input", this.onInput);
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener("input", this.onInput);
  }

}