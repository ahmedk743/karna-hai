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

const Stack = createStackNavigator();

// Paiyan git seekho aur naam kamao

const App = () => {
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
