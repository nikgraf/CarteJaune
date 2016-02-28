require('babel-polyfill');
require('react-native-mock/mock');

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiImmutable from 'chai-immutable';

chai.use(dirtyChai);
chai.use(chaiImmutable);
