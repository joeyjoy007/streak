/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withTiming,
  SlideInRight,
  Layout,
  SlideInLeft,
  FadeOut,
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeInLeft,
} from 'react-native-reanimated';
import {BW, F} from '../../helpers/styles';

const Reanimatesd = () => {
  const offset = useSharedValue(0);
  offset.value = withTiming(0, {
    duration: 100,
    easing: Easing.out(Easing.exp),
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  return (
    <View style={[{flex: 1}]}>
      {/* <Animated.View
        style={[{borderWidth: 1, height: 100, width: 100}, animatedStyles]}
      />
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random() * 100);
        }}
        title="Move"
      /> */}
      <Animated.View
        entering={FadeIn}
        style={{
          backgroundColor: 'red',
          height: 100,
          width: 100,
        }}
        layout={Layout.springify()}>
        <Text>Hello</Text>
      </Animated.View>
    </View>
  );
};

export default Reanimatesd;

const styles = StyleSheet.create({});
