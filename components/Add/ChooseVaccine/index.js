import React, {
  Component,
  ListView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

export default class ChooseVaccine extends Component {

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

  renderItem(vaccine) {
    return (
      <TouchableOpacity onPress={ () => this.props.onPick(vaccine.id) }>
        <View style={styles.row}>
          <Text>{ vaccine.name }</Text>
          <Text style={styles.disease}>{ vaccine.diseases.join(', ')}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem.bind(this)}
        style={styles.listView}
      />
    );
  }
}
