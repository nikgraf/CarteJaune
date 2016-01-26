import React, {
  Component,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

export default class Button extends Component {
  state = {
    active: false,
  };

  _onHighlight() {
    this.setState({ active: true });
  }

  _onUnhighlight() {
    this.setState({ active: false });
  }

  render() {
    const colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight.bind(this)}
        onPress={this.props.onPress.bind(this)}
        onShowUnderlay={this._onHighlight.bind(this)}
        style={[styles.button, this.props.style]}
        underlayColor="#B8CCD8"
      >
        <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}
