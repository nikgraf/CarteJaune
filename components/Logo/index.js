import React, {
  Component,
  Image,
} from 'react-native';
import icon from './icon';

export default class Logo extends Component {
  render() {
    return (
      <Image
        key={'logo'}
        style={ this.props.style }
        source={{ uri: icon }}
      />
    );
  }
}
