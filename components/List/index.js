import React, {
  Component,
  ListView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dateformat from 'dateformat';
import styles from './styles';
import Logo from '../Logo';
import Button from '../Button';
import Card from '../Card';

export default class List extends Component {

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
  };

  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.vaccinations.toJS())
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.vaccinations.toJS())
    });
  }

  getDisease() {
    const diseases = this.props.vaccinations
      .toList()
      .map((vaccination) => vaccination.getIn(['vaccine', 'diseases']))
      .flatten(true);
    return diseases
      .toSet()
      .toList()
      .sort()
      .join(', ');
  }

  renderHeader() {
    return (
      <View>
        <View style={styles.header}>
          <Logo style={styles.logo} />
          <Text style={styles.headerText}>Carte Jaune</Text>
        </View>
        <Text style={styles.label}>Vaccines</Text>
      </View>
    );
  }

  renderDiseases() {
    return (
      <View>
        <Text style={styles.label}>Covered Diseases</Text>
        <Card style={styles.diseases}>
          <Text style={styles.diseasesText}>{this.getDisease()}</Text>
        </Card>
      </View>
    );
  }

  renderFooter() {
    return (
      <View>
        {this.props.vaccinations.size ? this.renderDiseases() : null}
        <Button
          onPress={this.props.switchToChooseVaccineRoute}
          style={styles.addButton}
        >
            <Text style={styles.plus}>+</Text>
            <Text style={styles.addText}>Add Vaccination</Text>
        </Button>
        <Text style={styles.promo}>Made with ♡ by Nik Graf</Text>
        <Text style={styles.smallPromo}>
          Open Source Code: https://www.github.com/nikgraf/CarteJaune
        </Text>
        <Text style={styles.smallPromo}>
          Logo made by Freepik is licensed under CC BY 3.0
        </Text>
        <Text style={styles.disclaimer}>
          This App is designed for educational purposes only and is not intended
          to serve as medical advice.
        </Text>
      </View>
    );
  }

  renderItem(vaccination) {
    return (
      <TouchableOpacity onPress={ () => this.props.switchToDetailRoute(vaccination.listId) }>
        <Card style={styles.container}>
          <Text style={styles.name}>{vaccination.vaccine.name}</Text>
          <Text style={styles.disease}>{ vaccination.vaccine.diseases.join(', ')}</Text>
          <Text style={styles.vaccinationDate}>
            {dateformat(vaccination.date, 'ddd, dS mmmm, yyyy')}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem.bind(this)}
        style={styles.listView}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter.bind(this)}
      />
    );
  }
}
