import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
const App = () => {
  console.reportErrorsAsExceptions = false;
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
