import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {GLOBAL_STYLES} from '../../../common';

const AutoMessage = () => {
  return (
    <View style={GLOBAL_STYLES.settingsListItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faEnvelope} />
        <Text style={{marginLeft: 10}}>Auto Message Reply on Missed Calls</Text>
      </View>

      <Switch />
    </View>
  );
};

export default AutoMessage;

const styles = StyleSheet.create({});
