import React, {
  Component,
  DatePickerIOS,
} from 'react-native';
import styles from './styles';

export default class CustomDatePickerIOS extends Component {

  render() {
    return (
      <DatePickerIOS
        date={this.props.date}
        mode="date"
        style={styles.datepicker}
        onDateChange={this.props.onDateChange.bind(this)}
      />
    );
  }
}
