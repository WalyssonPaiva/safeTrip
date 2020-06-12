import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02C39A',
  },
  cosmetic: {
    height: '35%',
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cosmeticTitle: {
    fontSize: 30,
    color: '#FFF',
  },
  cosmeticSubtitle: {
    marginTop: 30,
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  main: {
    height: '65%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainTitle: {
    fontSize: 30,
  },
  mainSubtitle: {
    fontSize: 18,
    color: '#6C6C80',
    textAlign: 'center',
  },
  nameInput: {
    paddingHorizontal: 15,
    height: 60,
    width: width - 50,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 18,
  },
  button: {
    height: 60,
    width: 200,
    flexDirection: 'row',
    backgroundColor: '#02C39A',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  buttonIcon: {
    height: '100%',
    width: 60,
    backgroundColor: '#34A48C',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonText: {
    flex: 1,
    color: '#FFF',
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default styles;
