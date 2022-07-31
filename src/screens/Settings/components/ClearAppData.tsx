import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faTrash} from '@fortawesome/free-solid-svg-icons';
import {GLOBAL_STYLES} from '../../../common';

const ClearAppData = () => {
  return (
    <TouchableOpacity style={GLOBAL_STYLES.settingsListItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faTrash} />
        <Text style={{marginLeft: 10}}>Clear App Data</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClearAppData;

const styles = StyleSheet.create({});
