import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tag from '../components/Tag';
import {GLOBAL_STYLES} from '../common';
import {useData} from '../contexts/AppContext';

const Tags = () => {
  const {tags, setTags} = useData();

  return (
    <View style={GLOBAL_STYLES.screenWrapper}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {tags.map((tag: any, index: number) => (
          <Tag key={index} tag={tag} />
        ))}
      </View>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({});
