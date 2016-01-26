import React, {
  Component,
  Text,
  View,
} from 'react-native';
import dateformat from 'dateformat';
import Button from '../Button';
import Card from '../Card';
import styles from './styles';

export default class Detail extends Component {

  render() {
    const { currentVaccination } = this.props;
    if (!currentVaccination) { return null; }

    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.switchToListRoute}
          style={styles.backButton}
        >
          <Text style={styles.addText}>Back</Text>
        </Button>
        <Card>
          <Text style={styles.name}>{currentVaccination.getIn(['vaccine', 'name'])}</Text>
          <Text style={styles.disease}>
            { currentVaccination.getIn(['vaccine', 'diseases']).join(', ')}
          </Text>
          <Text style={styles.vaccinationDate}>
            {dateformat(currentVaccination.get('date'), 'ddd, dS mmmm, yyyy')}
          </Text>
        </Card>
      </View>
    );
  }
}
