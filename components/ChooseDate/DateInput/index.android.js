import React, {
  Component,
} from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import moment from 'moment';
import dateformat from 'dateformat';
import styles from './styles';

export default class DatePickerAndroid extends Component {

  constructor(props) {
    super();
    this.state = {
      isValid: true,
      date: dateformat(props.date, 'yyyy/mm/dd'),
    };
  }

  updateDate(text) {
    const isValid = moment(text, 'YYYY/MM/DD', true).isValid();
    if (!isValid) {
      this.setState({
        isValid: false,
        date: text,
      });
      this.props.onInvalidDateChange();
      return;
    }

    this.setState({
      date: text,
      isValid: true,
    });
    this.props.onDateChange(new Date(text));
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.date}
          placeholder={'yyyy/mm/dd'}
          style={styles.textInput}
          onChangeText={this.updateDate.bind(this)}
        />
        <Text style={styles.errorMessage}>
          {!this.state.isValid && 'Please enter a valid Date: YYYY/MM/DD'}
        </Text>
      </View>
    );
  }
}
