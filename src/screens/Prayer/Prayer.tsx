import moment from 'moment';
import {Spinner, Switch} from 'native-base';
import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {GLOBAL_STYLES} from '../../common';
import {PRAYERS, VERSES} from '../../constants/data';
import {COLORS} from '../../constants/theme';

export default function Prayer() {
  const [verses] = useState(VERSES);
  const [prayers, setPrayers] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const currentYear = moment().format('YYYY');
  const currentMonth = moment().format('M');

  const getPrayerTimes = () => {
    setLoading(true);
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
          console.log('prayersTemp', prayersTemp);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert('No internet connection to sync prayer times.');
      });
  };

  let randomVerseIndex = 0;
  React.useEffect(() => {
    randomVerseIndex = Math.floor(Math.random() * (4 + 1));

    // get prayer times
    getPrayerTimes();
  }, []);

  const renderHeader = () => {
    return (
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              paddingTop: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Daily Prayer Reminder
          </Text>
        </View>
      </View>
    );
  };

  function renderVerse() {
    return (
      <View
        style={{
          marginTop: 10,
          borderRadius: 10,
          padding: 10,
          backgroundColor: '#E8E8E8',
          marginHorizontal: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontSize: 17,
            }}>
            {verses[randomVerseIndex].verse}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>({verses[randomVerseIndex].reference})</Text>
        </View>
      </View>
    );
  }
  const reminders = ({item, index}: any) => {
    return (
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20}}>{item.name}</Text>
          <Text style={{fontSize: 20}}>{item.time}</Text>
          <Switch
            value={item.allow}
            colorScheme="emerald"
            size="md"
            onToggle={() => {
              setPrayers((prev: any) => {
                const newData = [...prev];
                newData[index] = {
                  ...newData[index],
                  allow: !newData[index].allow,
                };
                return newData;
              });
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={GLOBAL_STYLES.screenWrapper}>
      {renderHeader()}
      {renderVerse()}

      {loading ? (
        <Spinner style={{marginTop: 60}} size="lg" />
      ) : !prayers ? (
        <Text
          style={{
            color: COLORS.gray,
            fontStyle: 'italic',
            fontSize: 12,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Please connect to internet to sync prayers times
        </Text>
      ) : (
        <FlatList data={prayers} renderItem={reminders} />
      )}
    </View>
  );
}
