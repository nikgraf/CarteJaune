import React, { Component } from 'react';
import {
  DatePickerIOS,
} from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
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
