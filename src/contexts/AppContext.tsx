import {createContext, PropsWithChildren, useContext, useState} from 'react';
import React from 'react';
import {TAGS, TASKS} from '../constants/data';

export const myContext = createContext<any>({});

export function useData() {
  return useContext(myContext);
}

export default function Context(props: PropsWithChildren<any>) {
  const [tags, setTags] = useState<any>(TAGS);

  return (
    <myContext.Provider
      value={{
        tags,
        setTags,
      }}>
      {props.children}
    </myContext.Provider>
  );
}
