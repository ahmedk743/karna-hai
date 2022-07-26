import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Tasks from '../screens/Tasks';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faCog,
  faList,
  faPlus,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import NewTask from '../screens/NewTask';
import Settings from '../screens/Settings';
import Calendar from '../screens/Calendar';
import Tags from '../screens/Tags';

// import HomeScreen from '../screens/HomeScreen';
// import ListScreen from '../screens/ListScreen';
// import UsersScreen from '../screens/UsersScreen';
// import PostScreen from '../screens/PostScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 55,
        height: 55,
        borderRadius: 35,
        backgroundColor: '#00d4aa',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  const [showPostButton, setShowPostButton] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          borderBottomColor: '#ccc',
          borderBottomWidth: 4,
          borderRightColor: '#ccc',
          borderRightWidth: 4,
          borderLeftColor: '#ccc',
          borderLeftWidth: 1,
          height: 60,
          paddingBottom: 20,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <FontAwesomeIcon
                color={focused ? '#00d4aa' : '#748c94'}
                icon={faList}
              />
              <Text
                style={{
                  color: focused ? '#00d4aa' : '#748c94',
                  fontSize: 10,
                }}>
                TASKS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar View"
        component={Calendar}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <FontAwesomeIcon
                color={focused ? '#00d4aa' : '#748c94'}
                icon={faCalendar}
              />
              <Text
                style={{
                  color: focused ? '#00d4aa' : '#748c94',
                  fontSize: 10,
                }}>
                Calendar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NewTask"
        component={NewTask}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faPlus} size={35} color="#fff" />
          ),
          tabBarButton: props =>
            showPostButton ? <CustomTabBarButton {...props} /> : null,
        }}
      />
      <Tab.Screen
        name="Tags"
        component={Tags}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <FontAwesomeIcon
                color={focused ? '#00d4aa' : '#748c94'}
                icon={faTag}
              />
              <Text
                style={{
                  color: focused ? '#00d4aa' : '#748c94',
                  fontSize: 10,
                }}>
                Tags
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <FontAwesomeIcon
                color={focused ? '#00d4aa' : '#748c94'}
                icon={faCog}
              />
              <Text
                style={{
                  color: focused ? '#00d4aa' : '#748c94',
                  fontSize: 10,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

//        onPress={() => setShowPostButton(false)}
