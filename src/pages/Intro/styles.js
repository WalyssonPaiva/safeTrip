import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    color: '#6C6C80',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  startButton: {
    height: 70,
    paddingHorizontal: 60,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02C39A',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  dot: {
    backgroundColor: '#DEDEDE',
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#02C39A',
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    shadowColor: '#02C39A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default styles;
