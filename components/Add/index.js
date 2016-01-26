import React, {
  Component,
  Text,
  View,
  DatePickerIOS,
} from 'react-native';
import styles from './styles';
import ChooseVaccine from './ChooseVaccine';
import vaccines from '../../constants/vaccines';
import Button from '../Button';

export default class Add extends Component {

  state = {
    vaccinationKey: null,
    vaccinationDate: new Date(),
    step: 0
  };

  updateVaccinationDate(date) {
    this.setState({
      vaccinationDate: date,
    });
  }

  _handlePress() {
    const vaccine = vaccines.get(this.state.vaccinationKey);
    const vaccineWithDate = vaccine.set('vaccinationDate', this.state.vaccinationDate);
    this.props.onAdd(this.state.vaccinationKey, vaccineWithDate);
  }

  _onPick(vaccinationKey) {
    this.setState({
      vaccinationKey,
      step: 1,
    });
  }

  renderFirstStep() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pick a Vaccine</Text>
        <ChooseVaccine
          onPick={this._onPick.bind(this)}
          vaccines={vaccines}
        />
    </View>
    );
  }

  render() {
    if (this.state.step === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Pick a Vaccine</Text>
          <ChooseVaccine
            onPick={this._onPick.bind(this)}
            vaccines={vaccines}
          />
        </View>
      );
    } else if (this.state.step === 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Pick the Vaccination Date</Text>
          <DatePickerIOS
            date={this.state.vaccinationDate}
            mode="date"
            style={styles.datepicker}
            onDateChange={this.updateVaccinationDate.bind(this)}
          />
          <Button
            onPress={ this._handlePress.bind(this) }
            style={styles.addButton}
          >
              <Text style={styles.button}>Add Vaccination</Text>
          </Button>
        </View>
      );
    }
  }
}
