import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import Context from './src/contexts/AppContext';
import 'react-native-gesture-handler';
import Tags from './src/screens/Tags';

// Paiyan git seekho aur naam kamao

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <StatusBar backgroundColor="#00d4aa" />
        <Tabs />
      </NavigationContainer>
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
});

export default App;
