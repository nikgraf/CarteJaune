import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFBE6',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 80,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  vaccinationDate: {
    textAlign: 'center',
    marginBottom: 20,
  },
  disease: {
    color: '#999',
    fontSize: 12,
    marginBottom: 30,
    textAlign: 'center',
  },
  backButton: {
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
});
