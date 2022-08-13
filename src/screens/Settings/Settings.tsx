import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {GLOBAL_STYLES} from '../../common';
import AutoMessage from './components/AutoMessage';
import ClearAppData from './components/ClearAppData';
import ShowTags from './components/ShowTags';
import SetPrayerTimeLocation from './components/SetPrayerTimeLocation';
import RegisterAccount from './components/RegisterAccount';
import Title from './components/Title';
import {
  useRingerMode,
  RINGER_MODE,
  getRingerMode,
  checkDndAccess,
  RingerModeType,
  requestDndAccess,
} from 'react-native-ringer-mode';
import moment from 'moment';

const modeText: any = {
  [RINGER_MODE.silent]: 'Silent',
  [RINGER_MODE.normal]: 'Normal',
  [RINGER_MODE.vibrate]: 'Vibrate',
};

const Settings = ({navigation}: any) => {
  const {mode, error, setMode}: any = useRingerMode();
  // silent mode on time range

  const changeMode = async (newMode: RingerModeType) => {
    // From N onward, ringer mode adjustments that would toggle Do Not Disturb
    // are not allowed unless the app has been granted Do Not Disturb Access.
    // @see https://developer.android.com/reference/android/media/AudioManager#setRingerMode(int)
    if (newMode === RINGER_MODE.silent || mode === RINGER_MODE.silent) {
      const hasDndAccess = await checkDndAccess();
      if (hasDndAccess === false) {
        // This function opens the DND settings.
        // You can ask user to give the permission with a modal before calling this function.
        requestDndAccess();
        return;
      }
    }

    setMode(newMode);
  };

  return (
    <View style={GLOBAL_STYLES.screenWrapper}>
      <Title title="General" />
      <AutoMessage />
      <ClearAppData />
      <ShowTags navigation={navigation} />
      <SetPrayerTimeLocation />

      <Title title="Other" />
      <RegisterAccount />
      <Button title="Silent" onPress={() => changeMode(RINGER_MODE.silent)} />
      <Button title="Normal" onPress={() => changeMode(RINGER_MODE.normal)} />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 12,
          color: 'gray',
          marginTop: 10,
        }}>
        KarnaHai © Version 1.0.0
      </Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
