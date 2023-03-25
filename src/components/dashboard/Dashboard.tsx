/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dashboard: React.FC<any> = () => {
  return (
    <View style={{paddingLeft: 12, paddingRight: 12, paddingTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
          alignItems: 'center',
        }}>
        <Text>Streak</Text>
        <View
          style={{
            borderWidth: 1,
            height: 36,
            justifyContent: 'center',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
          }}>
          <View
            style={{borderWidth: 1, height: 30, width: 30, borderRadius: 15}}
          />
          <Text style={{marginLeft: 5}}>Andy</Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
