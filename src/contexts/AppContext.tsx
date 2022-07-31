import {createContext, PropsWithChildren, useContext, useState} from 'react';
import React from 'react';
import {TAGS, TASKS} from '../constants/data';

export const myContext = createContext<any>({});

export function useData() {
  return useContext(myContext);
}

export default function Context(props: PropsWithChildren<any>) {
  const [tags, setTags] = useState<any>(TAGS);
  const [tasks, setTasks] = useState<any>(TASKS);
  const [showNewTaskModal, setShowNewTaskModal] = useState<boolean>(false);

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
