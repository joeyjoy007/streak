/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React, {useRef} from 'react';
import {P} from '../../helpers/styles';
import RecentTransaction from './RecentTransaction';
import Savings from './Savings';
import GameOfTheDay from './GameOfTheDay';
import AddFlag from './AddFlag';
import Section1 from './Section1';
import * as Animatable from 'react-native-animatable';

const Dashboard: React.FC<any> = ({route}) => {
  const [showTiming, setShowTiming] = React.useState<number>(
    route?.params?.aTiming,
  );
  const [showTiming1, setShowTiming1] = React.useState<number>(
    route?.params?.aTiming,
  );
  const AnimationRef1 = useRef(null);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      {/* <Section */}
      <Section1
        showTiming={showTiming}
        setShowTiming={setShowTiming}
        setShowTiming1={setShowTiming1}
        showTiming1={showTiming1}
        AnimationRef1={AnimationRef1}
      />
      {showTiming1 === 2 ? (
        <Animatable.View
          duration={600}
          delay={0}
          ref={AnimationRef1}
          // animation="fadeInUp"
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
      ) : null}
    </ScrollView>
  );
};

export default Dashboard;