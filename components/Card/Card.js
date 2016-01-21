import React, {
  Component,
  View,
} from 'react-native';
import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <View
        style={[styles.container, this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}
