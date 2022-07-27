import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Tag = ({tag}: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: tag.color,
        marginVertical: 7,
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        alignSelf: 'flex-start',
      }}>
      <FontAwesomeIcon
        style={{marginRight: 5}}
        size={20}
        color="white"
        icon={tag.icon}
      />
      <Text style={{color: 'white'}} key={tag.id}>
        {tag.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;

const styles = StyleSheet.create({});
