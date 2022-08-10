import {createContext, PropsWithChildren, useContext, useState} from 'react';
import React from 'react';
import {TAGS, TASKS} from '../constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const myContext = createContext<any>({});

export function useData() {
  return useContext(myContext);
}

export default function Context(props: PropsWithChildren<any>) {
  const [tags, setTags] = useState<any>(TAGS);
  const [tasks, setTasks] = useState<any>([]);
  const [showNewTaskModal, setShowNewTaskModal] = useState<boolean>(false);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('reminders');
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (value !== null) {
          // value previously stored
          console.log('length at appjs', value.length);
          setTasks(value);
        }
      } catch (e) {
        // error reading value
        alert('Cannot get data from storage!');
      }
    };
    getData();
  }, []);

  return (
    <myContext.Provider
      value={{
        tags,
        setTags,
        showNewTaskModal,
        setShowNewTaskModal,
        tasks,
        setTasks,
      }}>
      {props.children}
    </myContext.Provider>
  );
}
