/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View, Animated} from 'react-native';
import React from 'react';
import {P} from '../../helpers/styles';
import RecentTransaction from './RecentTransaction';
import Savings from './Savings';
import GameOfTheDay from './GameOfTheDay';
import AddFlag from './AddFlag';
import Section1 from './Section1';
import * as Animatable from 'react-native-animatable';

const Dashboard: React.FC<any> = () => {

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      {/* <Section */}
      <Section1 />
      <Animatable.View
        duration={600}
        delay={0}
        animation="fadeInUp"
        easing={'ease-in'}>
        <View style={[P(12)]}>
          <RecentTransaction />
        </View>
        <View style={[P(12)]}>
          <Savings />
        </View>
        <View style={[P(12)]}>
          <GameOfTheDay />
        </View>
        <View>
          <AddFlag />
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
