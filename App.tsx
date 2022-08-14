import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import Context from './src/contexts/AppContext';
import Tags from './src/screens/Tags/Tags';
import {createStackNavigator} from '@react-navigation/stack';
import {NewTask} from './src/screens/NewTask';
import {NativeBaseProvider} from 'native-base';
import {getPermissions} from './permissions';
import Address from './src/screens/Address';
// import BackgroundFetch from 'react-native-background-fetch';

const Stack = createStackNavigator();

// Paiyan git seekho aur naam kamao

const App = () => {
  React.useEffect(() => {
    getPermissions();
    // initBackgroundFetch();
  }, []);

  // async function initBackgroundFetch() {
  //   // BackgroundFetch event handler.
  //   const onEvent = async (taskId: any) => {
  //     console.log('[BackgroundFetch] task: ', taskId);
  //     // Do your background work...
  //     await addEvent(taskId);
  //   };

  //   // Timeout callback is executed when your Task has exceeded its allowed running-time.
  //   // You must stop what you're doing immediately BackgroundFetch.finish(taskId)
  //   const onTimeout = async (taskId: any) => {
  //     console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
  //   };

  //   // Initialize BackgroundFetch only once when component mounts.
  //   let status = await BackgroundFetch.configure(
  //     {minimumFetchInterval: 15},
  //     onEvent,
  //     onTimeout,
  //   );

  //   console.log('[BackgroundFetch] configure status: ', status);
  // }

  // // Add a BackgroundFetch event to <FlatList>
  // function addEvent(taskId: any) {
  //   // Simulate a possibly long-running asynchronous task with a Promise.
  //   return new Promise<void>((resolve, reject) => {
  //     // setState((state: { events: any; }) => ({
  //     //   events: [
  //     //     ...state.events,
  //     //     {
  //     //       taskId: taskId,
  //     //       timestamp: new Date().toString(),
  //     //     },
  //     //   ],
  //     // }));
  //     setTimeout(resolve, 3000);
  //   });
  // }

  return (
    <Context>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#00d4aa" />
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Main"
              component={Tabs}
            />
            <Stack.Screen name="Tags" component={Tags} />
            <Stack.Screen name="Address" component={Address} />
            {/* <Tabs /> */}
          </Stack.Navigator>
        </NavigationContainer>
        <NewTask />
      </NativeBaseProvider>
    </Context>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff8c21',
    padding: 10,
    justifyContent: 'center',
    height: 60,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});

export default App;
