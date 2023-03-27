import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../components/splash/Splash';
import {color} from '../helpers/colors';
import Dashboard from '../components/dashboard/Dashboard';
import {navigationKey} from '../helpers/navigations';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        options={{
          statusBarColor: color.mainColor,
        }}
        name={navigationKey.SPLASH}
        component={Splash}
      />
      <Stack.Screen name={navigationKey.DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Navigation;
