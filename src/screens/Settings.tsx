import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GLOBAL_STYLES} from '../common';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Settings = ({navigation}: any) => {
  return (
    <View style={GLOBAL_STYLES.screenWrapper}>
      <View style={{margin: 10}}>
        <Text style={{fontWeight: '700', fontSize: 16, marginRight: 10}}>
          General
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Tags')}>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}>
          <View>
            <FontAwesomeIcon icon={faEnvelope} />
            <Text style={{marginLeft: 10}}>
              Auto Message Reply on Missed Calls
            </Text>
          </View>

          <Switch />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>
          <Text style={{marginLeft: 10}}>Clear App Data</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>
          <Text style={{marginLeft: 10}}>Tags</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}>
          <Text style={{marginLeft: 10}}>Prayer Times Location</Text>
        </View>
      </TouchableOpacity>
      <View style={{margin: 10}}>
        <Text style={{fontWeight: '700', fontSize: 16, marginRight: 10}}>
          Other
        </Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
