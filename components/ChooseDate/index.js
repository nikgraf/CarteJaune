import React, {
  Component,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Button from '../Button';
import DateInput from './DateInput';

export default class ChooseDate extends Component {

  state = {
    vaccinationDate: new Date(),
    isValidDate: true,
  };

  onUpdateDate(date) {
    this.setState({
      vaccinationDate: date,
      isValidDate: true,
    });
  }

  onInvalidDateChange() {
    this.setState({
      isValidDate: false,
    });
  }

  onPress() {
    this.props.addVaccination(this.props.addForm.get('vaccineId'), this.state.vaccinationDate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pick the Vaccination Date</Text>
        <DateInput
          date={this.state.vaccinationDate}
          onDateChange={this.onUpdateDate.bind(this)}
          onInvalidDateChange={this.onInvalidDateChange.bind(this)}
        />
        <Button
          disabled={!this.state.isValidDate}
          onPress={ this.onPress.bind(this) }
          style={styles.addButton}
        >
          <Text>Add Vaccination</Text>
        </Button>
      </View>
    );
  }
}
