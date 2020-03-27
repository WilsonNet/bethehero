import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { useNav, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

const Detail = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha ATtropelada" com o valor de R$120,00 '
  const sendEmail = () => {
    MailComposer.composeAsync({
      subjet: 'Herói do caso: Cadelinha atropelada',
      recipients: ['diego@rocketseat.com.br'],
      body: message
    });
  };
  const sendWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=+668357&text=${message}`)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={(styles.incidentProperty, { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>

        <TouchableOpacity onPress={() => {}} style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
        <Text style={styles.heroDescription}>Entre em contat:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;
