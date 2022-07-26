import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';

const NewTask = ({navigation}: any) => {
  const [isModalVisible, setIsModalVisible] = React.useState(true);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  //   React.useEffect(() => {
  //     return () => {
  //       navigation.navigate('Tasks');
  //     };
  //   }, []);

  return (
    <Modal visible={isModalVisible}>
      <View style={{flex: 1}}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={handleModal} />
      </View>
    </Modal>
  );
};

export default NewTask;

const styles = StyleSheet.create({});
