import React, {
  Component,
  ListView,
  Text,
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
      dataSource: this.state.dataSource.cloneWithRows(this.props.vaccines.toJS())
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.vaccines.toJS())
    });
  }

  getDisease() {
    const diseases = this.props.vaccines
      .toList()
      .map((vaccine) => vaccine.get('diseases'))
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
        {this.props.vaccines.size ? this.renderDiseases() : null}
        <Button
          onPress={this.props.onPressToAdd.bind(this)}
          style={styles.addButton}
        >
            <Text style={styles.plus}>+</Text>
            <Text style={styles.addText}>Add Vaccination</Text>
        </Button>
      </View>
    );
  }

  renderItem(vaccine) {
    return (
      <Card style={styles.container}>
        <Text style={styles.name}>{vaccine.name}</Text>
        <Text style={styles.disease}>{ vaccine.diseases.join(', ')}</Text>
        <Text style={styles.vaccinationDate}>
          {dateformat(vaccine.vaccinationDate, 'ddd, dS mmmm, yyyy')}
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter.bind(this)}
      />
    );
  }
}
