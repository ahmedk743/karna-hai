import {createContext, PropsWithChildren, useContext, useState} from 'react';
import React from 'react';
import {TAGS, TASKS} from '../constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {
  checkDndAccess,
  requestDndAccess,
  RingerModeType,
  RINGER_MODE,
  useRingerMode,
} from 'react-native-ringer-mode';
import {useToast} from 'native-base';

//Import Call Detector
import CallDetectorManager from 'react-native-call-detection';
// import SMS API
import SmsAndroid from 'react-native-get-sms-android';

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
          setTasks(value);
        }
      } catch (e) {
        // error reading value
        alert('Cannot get data from storage!');
      }
    };
    getData();
  }, []);

  const {mode, error, setMode}: any = useRingerMode();
  const toast = useToast();

  const changeMode = async (newMode: RingerModeType) => {
    if (newMode === RINGER_MODE.silent || mode === RINGER_MODE.silent) {
      const hasDndAccess = await checkDndAccess();
      if (hasDndAccess === false) {
        requestDndAccess();
        return;
      }
    }

    setMode(newMode);
  };
  const bodySMS =
    'Esselamün Aleyküm!\nI am currently busy at the moment. I will call back you later.';

  let callDetector: any = undefined;

  React.useEffect(() => {
    // check if any task time is same as current time to enable DND
    if (tasks.length > 0) {
      const task = tasks
        .filter(
          (task: any) => new Date(task.timeTo).getTime() > new Date().getTime(),
        )
        .sort(
          (a: any, b: any) =>
            new Date(a.date).getTime() - new Date(b.date).getTime(),
        )[0];

      console.log('task', task);
      const dateRange = [moment(task?.timeFrom), moment(task?.timeTo)];
      if (moment(new Date()).isBetween(dateRange[0], dateRange[1])) {
        console.log(
          'into the woods',
          moment(new Date()).isBetween(dateRange[0], dateRange[1]),
          dateRange,
        );

        // enable DND
        console.log('mode', mode);

        changeMode(RINGER_MODE.silent);
        toast.show({
          description: 'DND Mode enabled!',
        });
      } else {
        console.log('modeN', mode);
        changeMode(RINGER_MODE.normal);
        toast.show({
          description: 'DND Mode back to normal!',
        });
      }
    }

    // listen to call detection and send sms
    callDetector = new CallDetectorManager(
      (event: any, phoneNumber: any) => {
        console.log('Detector active');

        if (event === 'Incoming') {
          toast.show({
            description: 'Call is incoming',
          });
        } else if (event === 'Missed') {
          toast.show({
            description: 'Call missed',
          });
          console.log(phoneNumber);
          SmsAndroid.autoSend(
            phoneNumber,
            bodySMS,
            (fail: any) => {
              toast.show({
                description: 'Failed with this error: ' + fail,
                backgroundColor: 'red.500',
              });
            },
            (success: any) => {
              toast.show({
                description: 'SMS sent successfully',
              });
            },
          );
        }
      },
      true, // if you want to read the phone number of the incoming call    [ANDROID], otherwise false
      (phoneNumber: any) => {
        console.log(phoneNumber);
      }, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default:
      toast.show({
        description: 'Permission denied!',
        backgroundColor: 'red.500',
      }),
    );
    getPrayerTimes();
  }, [showNewTaskModal, tasks]);

  const [prayers, setPrayers] = useState<any[]>();
  const [country, setCountry] = useState<string>('pakistan');
  const [loading, setLoading] = useState<boolean>(false);

  const _storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('prayers', jsonValue);
    } catch (e: any) {
      // saving error
      alert('Error while saving reminder!');
    }
  };

  const currentYear = moment().format('YYYY');
  const currentMonth = moment().format('M');

  const getPrayerTimes = () => {
    setLoading(true);

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('prayers');
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (value !== null) {
          // value previously stored

          setPrayers(value);
        } else {
          console.log('getting from api');

          fetch(
            `https://api.aladhan.com/v1/calendar?latitude=33.673354&longitude=73.027972&method=2&month=${currentMonth}&year=${currentYear}`,
          )
            .then(res => res.json())
            .then(prayers => {
              let timings = prayers.data[0].timings;
              if (timings) {
                let prayersTemp: any[] = [];
                const names = Object.keys(timings);
                names.forEach((item: any, index: number) => {
                  prayersTemp.push({
                    id: index,
                    name: item,
                    allow: false,
                    time: timings[item],
                  });
                });
                setPrayers(prayersTemp);
                _storeData(prayersTemp);
              }
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
              alert('No internet connection to sync prayer times.');
            });
        }
      } catch (e) {
        // error reading value
        alert('Cannot get data from storage!');
      }
    };
    getData();
    setLoading(false);
  };

  return (
    <myContext.Provider
      value={{
        tags,
        setTags,
        showNewTaskModal,
        setShowNewTaskModal,
        tasks,
        setTasks,
        prayers,
        loading,
        setPrayers,
      }}>
      {props.children}
    </myContext.Provider>
  );
}
