/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {color} from '../../helpers/colors';
import {navigationKey} from '../../helpers/navigations';
import {FontFamily} from '../../helpers/styles';

const Splash: React.FC<any> = ({navigation}) => {
  const userToken = 1;

  React.useEffect(() => {
    navigation.addListener('focus', async () => {
      try {
        setTimeout(() => {
          if (userToken !== null) {
            navigation.navigate(navigationKey.DASHBOARD,{
              aTiming:0
            });
          } else {
            navigation.navigate(navigationKey.SPLASH);
          }
        }, 3000);
      } catch (error: any) {
        console.log('Splash error ==>', error);
      }
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Text
        duration={2500}
        delay={1}
        animation="zoomInLeft"
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: FontFamily.Barlow_Semi_bold,
        }}>
        Streak
      </Animatable.Text>
    </View>
  );
};

export default Splash;
