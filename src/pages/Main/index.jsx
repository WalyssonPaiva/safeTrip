import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import mainImage from '../../assets/main.png';
import styles from './styles';

import CustomText from '../../components/CustomText';

const Main = () => {
  const navigation = useNavigation();

  const handleNavigateToMapPage = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <CustomText bold style={styles.title}>
        Vamos Dirigir ?
      </CustomText>
      <Image
        style={{ height: 180, width: '100%' }}
        resizeMode="contain"
        source={mainImage}
      />
      <CustomText style={styles.description}>
        Lembre-se de fazer pequenas pausas durante a viagem.
      </CustomText>
      <RectButton style={styles.startButton} onPress={handleNavigateToMapPage}>
        <CustomText bold style={styles.buttonText}>
          Traçar rota
        </CustomText>
      </RectButton>
    </View>
  );
};

export default Main;
