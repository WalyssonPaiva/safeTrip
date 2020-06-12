import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1FFF7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    marginTop: 80,
    lineHeight: 48,
    marginBottom: -19,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    padding: 24,
  },
  startButton: {
    height: 70,
    paddingHorizontal: 60,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03C39A',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  },
});

export default styles;
