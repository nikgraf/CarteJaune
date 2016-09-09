import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Card extends Component {
  render() {
    return (
      <View
        style={[styles.container, this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}
