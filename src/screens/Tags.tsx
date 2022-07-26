import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TAGS} from '../constants/data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Tags = () => {
  const [tags, setTags] = React.useState(TAGS);

  return (
    <View>
      <Text style={{fontWeight: '700', fontSize: 20, margin: 10}}>Tags</Text>
      {tags.map((tag: any) => (
        <View
          style={{
            backgroundColor: tag.color,
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            padding: 10,
            borderRadius: 50,
            alignSelf: 'flex-start',
          }}>
          <FontAwesomeIcon
            style={{marginRight: 5}}
            color="white"
            icon={tag.icon}
          />
          <Text style={{color: 'white'}} key={tag.id}>
            {tag.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({});
