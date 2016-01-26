import React, {
  Component,
  View,
} from 'react-native';
import styles from './styles';

export default class Triangle extends Component {
  render() {
    const style = [this.props.style];
    if (this.props.up) {
      style.unshift(styles.up);
    } else {
      style.unshift(styles.down);
    }
    return (
      <View style={style} />
    );
  }
}
