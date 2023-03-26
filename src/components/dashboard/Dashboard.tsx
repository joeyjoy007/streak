/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {P} from '../../helpers/styles';
import RecentTransaction from './RecentTransaction';
import Savings from './Savings';
import GameOfTheDay from './GameOfTheDay';
import AddFlag from './AddFlag';
import Section1 from './Section1';

const Dashboard: React.FC<any> = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      {/* <Section */}
      <Section1 />
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
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
