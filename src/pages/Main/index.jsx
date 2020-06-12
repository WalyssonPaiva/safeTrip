import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import mainImage from '../../assets/main.png';
import styles from './styles';

const Main = () => {
  const navigation = useNavigation();

  const handleNavigateToMapPage = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos Dirigir ?</Text>
      <Image
        style={{ height: 180, width: '100%' }}
        resizeMode="contain"
        source={mainImage}
      />
      <Text style={styles.description}>
        Lembre-se de fazer pequenas pausas durante a viagem.
      </Text>
      <RectButton style={styles.startButton} onPress={handleNavigateToMapPage}>
        <Text style={styles.buttonText}>Traçar rota</Text>
      </RectButton>
    </View>
  );
};

export default Main;
