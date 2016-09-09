import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiImmutable from 'chai-immutable';

require('babel-polyfill');
require('react-native-mock/mock');

chai.use(dirtyChai);
chai.use(chaiImmutable);
