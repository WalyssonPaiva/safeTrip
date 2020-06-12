import React from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import CustomText from '../../components/CustomText';

import styles from './styles';

const Login = () => {
  const navigation = useNavigation();

  const handleNavigateToMainPage = () => {
    navigation.navigate('Main');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.cosmetic}>
          <CustomText bold style={styles.cosmeticTitle}>
            Safe Trip
          </CustomText>
          <CustomText style={styles.cosmeticSubtitle}>
            Você sabia que o Brasil tem mais de 8,5mi de km² de extensão
            territorial?
          </CustomText>
        </View>
        <View style={styles.main}>
          <CustomText bold style={styles.mainTitle}>
            Primeiro Acesso
          </CustomText>
          <CustomText style={styles.mainSubtitle}>
            Para acessar o aplicativo, apenas informe seu nome. Assim, podemos
            ter uma comunicação mais saudável!
          </CustomText>
          <TextInput placeholder="Seu nome" style={styles.nameInput} />

          <RectButton style={styles.button} onPress={handleNavigateToMainPage}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="sign-in-alt" color="#FFF" size={24} />
              </Text>
            </View>

            <CustomText bold style={styles.buttonText}>
              Entrar
            </CustomText>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
