import React, {
  Component,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import ChooseVaccine from './ChooseVaccine';
import vaccines from '../../constants/vaccines';
import ChooseDate from './ChooseDate';

export default class Add extends Component {

  state = {
    vaccineId: null,
    step: 0,
  };

  onAdd(date) {
    const vaccine = vaccines.get(this.state.vaccineId);
    const vaccineWithDate = vaccine.set('vaccinationDate', date);
    this.props.addVaccination(this.state.vaccineId, vaccineWithDate);
  }

  onPickVaccine(vaccineId) {
    this.setState({
      vaccineId,
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
            onPick={this.onPickVaccine.bind(this)}
            vaccines={vaccines}
          />
        </View>
      );
    } else if (this.state.step === 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Pick the Vaccination Date</Text>
          <ChooseDate onSelectDate={this.onAdd.bind(this)} />
        </View>
      );
    }
  }
}
