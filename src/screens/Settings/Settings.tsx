import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {GLOBAL_STYLES} from '../../common';
import AutoMessage from './components/AutoMessage';
import ClearAppData from './components/ClearAppData';
import ShowTags from './components/ShowTags';
import SetPrayerTimeLocation from './components/SetPrayerTimeLocation';
import RegisterAccount from './components/RegisterAccount';
import Title from './components/Title';

const Settings = ({navigation}: any) => {
  return (
    <View style={GLOBAL_STYLES.screenWrapper}>
      <Title title="General" />
      <AutoMessage />
      <ClearAppData />
      <ShowTags navigation={navigation} />
      <SetPrayerTimeLocation />

      <Title title="Other" />
      <RegisterAccount />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
