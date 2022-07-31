import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useData} from '../../contexts/AppContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../../constants/theme';
import NewTaskForm from './components/NewTaskForm';
import Modal from 'react-native-modal';
import moment from 'moment';
import {useToast} from 'native-base';

const NewTask = ({navigation}: any) => {
  const toast = useToast();
  const {showNewTaskModal, setShowNewTaskModal, setTasks} = useData();
  const [task, setTask] = React.useState({
    title: '',
    date: new Date(),
    timeFrom: new Date(new Date().getTime() + 10 * 60000),
    timeTo: new Date(new Date().getTime() + 30 * 60000),
    enableDND: true,
    message: 'Insaan bano, time per call kro.',
    allowAutomaticMessageOnMissedCall: true,
    description: '',
    hasReminder: true,
    reminders: [],
    tags: [],
    numbersToOverrideQuietMode: [],
    priority: 1,
  });

  const handleModal = () => {
    setShowNewTaskModal(() => false);
  };

  return (
    <Modal
      isVisible={showNewTaskModal}
      style={{
        marginBottom: 0,
        marginHorizontal: 0,
        marginTop: 0,
      }}
      backdropOpacity={0.5}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          paddingHorizontal: 18,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <TouchableOpacity
            onPress={handleModal}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesomeIcon size={30} icon={faTimes} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (task.title === '') {
                return alert('Please enter title!');
              }
              if (
                moment(task.date).date() === new Date().getDate() &&
                moment(task.timeFrom).isBefore(new Date())
              ) {
                return alert(
                  'From Time value cannot be right now or before this moment!',
                );
              }

              if (moment(task.timeFrom).isSameOrAfter(task.timeTo)) {
                return alert('Please valid time range!');
              }
              if (task.tags.length === 0) {
                return alert('Please select at least one tag!');
              }
              if (
                task.allowAutomaticMessageOnMissedCall &&
                task.message === ''
              ) {
                return alert('Please enter message!');
              }

              setTasks((prev: any) => {
                let newData = [...prev];
                console.log('prev', prev);
                newData.push(task);
                console.log('newData', newData);
                return newData;
              });

              handleModal();

              toast.show({
                description: 'Task added, hurray!',
              });
            }}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 2,
            }}>
            <FontAwesomeIcon size={30} icon={faCheck} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 30,
              marginTop: 20,
            }}>
            New Task
          </Text>
          <NewTaskForm task={task} setTask={setTask} />
        </View>
      </View>
    </Modal>
  );
};

export default NewTask;

const styles = StyleSheet.create({});