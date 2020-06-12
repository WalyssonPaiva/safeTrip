import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    width: width - 200,
    height: 40,
    backgroundColor: '#03C39A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  inputContainer: {
    width: '100%',
    maxHeight: 200,
  },

  input: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginBottom: 15,
    marginHorizontal: 20,
    borderColor: '#065E5E',
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
});

export default styles;
