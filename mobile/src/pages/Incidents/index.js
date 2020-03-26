import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

const Incidents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText} />
      </View>
    </View>
  );
};

export default Incidents;
