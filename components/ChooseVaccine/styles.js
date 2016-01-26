import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFBE6',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    fontSize: 24,
    paddingBottom: 20,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
  },
  listView: {
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
    borderRadius: 3,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 10
  },
  disease: {
    color: '#999',
    fontSize: 10,
  }
});
