import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import {GLOBAL_STYLES} from '../../../common';

const RegisterAccount = () => {
  return (
    <TouchableOpacity style={GLOBAL_STYLES.settingsListItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faUser} />
        <Text style={{marginLeft: 10}}>Register Account</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterAccount;

const styles = StyleSheet.create({});
