import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import icon from './icon';

// eslint-disable-next-line react/prefer-stateless-function
export default class Logo extends Component {
  render() {
    return (
      <Image
        key={'logo'}
        style={this.props.style}
        source={{ uri: icon }}
      />
    );
  }
}
