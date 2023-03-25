import React from 'react';
import Splash from './src/components/splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
