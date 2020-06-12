import React from 'react';
import { View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import firstImage from '../../assets/firstImage.png';
import secondImage from '../../assets/secondImage.png';
import thirdImage from '../../assets/thirdImage.png';

import CustomText from '../../components/CustomText';

import styles from './styles';

const Intro = () => {
  const navigation = useNavigation();

  const handleNavigateToLoginPage = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Swiper
        paginationStyle={{
          position: 'absolute',
          top: '85%',
        }}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slide}>
          <Image
            style={{ height: 180, width: '100%' }}
            resizeMode="contain"
            source={firstImage}
          />
          <CustomText bold style={styles.title}>
            Tenha uma viagem mais segura e saudável!
          </CustomText>
          <CustomText style={styles.subtitle}>
            AppName irá lhe auxiliar nas suas viagens. Continue para saber mais
            detalhes!
          </CustomText>
        </View>
        <View style={styles.slide}>
          <Image
            source={secondImage}
            style={{ height: 150, width: '100%' }}
            resizeMode="contain"
          />
          <CustomText bold style={styles.title}>
            Lembretes para auxiliar sua alimentação
          </CustomText>
          <CustomText style={styles.subtitle}>
            Durante sua viagem, nós iremos te lembrar a se alimentar (de maneira
            saudável, ok?)
          </CustomText>
        </View>
        <View style={styles.slide}>
          <Image
            source={thirdImage}
            style={{ height: 150, width: '100%' }}
            resizeMode="contain"
          />
          <CustomText bold style={styles.title}>
            Alertas sobre áreas perigosas
          </CustomText>
          <CustomText style={styles.subtitle}>
            Os caminhoneiros que utilizam nosso app podem registrar áreas
            potencialmente hostis. Assim, você poderá evitá-las!
          </CustomText>
        </View>
      </Swiper>

      <View>
        <RectButton
          style={styles.startButton}
          onPress={handleNavigateToLoginPage}
        >
          <CustomText bold style={styles.buttonText}>
            Começar
          </CustomText>
        </RectButton>
      </View>
    </View>
  );
};

export default Intro;
