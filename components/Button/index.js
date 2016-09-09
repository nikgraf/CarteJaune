import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

export default class Button extends Component {
  state = {
    active: false,
  };

  onHighlight() {
    this.setState({ active: true });
  }

  onUnhighlight() {
    this.setState({ active: false });
  }

  onPress() {
    if (!this.props.disabled) {
      this.props.onPress();
    }
  }

  render() {
    const colorStyle = {
      color: this.props.disabled ? '#ccc' : '#000',
    };
    const underlayColor = this.props.disabled ? '#E0F4FF' : '#B8CCD8';
    return (
      <TouchableHighlight
        onHideUnderlay={this.onUnhighlight.bind(this)}
        onPress={this.onPress.bind(this)}
        onShowUnderlay={this.onHighlight.bind(this)}
        style={[styles.button, this.props.style]}
        underlayColor={underlayColor}
      >
        <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}
