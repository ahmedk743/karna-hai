import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {GLOBAL_STYLES} from '../common';

const Prayer = () => {
  return (
    <View style={GLOBAL_STYLES.screenWrapper}>
      <View>
        <Text>Prayer</Text>
        <Switch />
      </View>
    </View>
  );
};

export default Prayer;

const styles = StyleSheet.create({});
