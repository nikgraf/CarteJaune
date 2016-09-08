import React, { Component } from 'react';
import {
  DatePickerIOS,
  View,
} from 'react-native';
import styles from './styles';

export default class CustomDatePickerIOS extends Component {

  render() {
    return (
      <DatePickerIOS
        date={this.props.date}
        mode="date"
        onDateChange={this.props.onDateChange.bind(this)}
      />
    );
  }
}
