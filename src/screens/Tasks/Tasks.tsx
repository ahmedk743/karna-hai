import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GLOBAL_STYLES} from '../../common';
import {useData} from '../../contexts/AppContext';
import moment from 'moment';
import {COLORS, SIZES} from '../../constants/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import Tag from '../../components/Tag';
import {Swipeable} from 'react-native-gesture-handler';
import TasksList from '../../common/TasksList';

const Tasks = () => {
  const {tasks, setTasks} = useData();

  return (
    <View style={{maxHeight: '87%', backgroundColor: '#fff'}}>
      {tasks.length === 0 ? (
        <Image
          style={{width: '80%', alignSelf: 'center'}}
          source={require('../../assets/images/nothing.jpeg')}
        />
      ) : (
        <TasksList
          tasks={tasks.sort(
            (a: any, b: any) =>
              new Date(a.date).getTime() - new Date(b.date).getTime(),
          )}
          setTasks={setTasks}
          showSideDate
        />
      )}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
