/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {
  BBL,
  BBR,
  BG,
  BLW,
  BR,
  BW,
  FontFamily,
  MB,
  MT,
  P,
  PH,
  PR,
  PT,
} from '../../helpers/styles';
import NormalText from '../../helpers/texts/NormalText';
import {color, savingsSectionColors} from '../../helpers/colors';

const Savings = () => {
  return (
    <View
      style={[
        MT(15),
        BG('#F5F7Fb'),
        // H(globalHeight / 2),
        BR(10),
        PT(20),
        BW(),
        {borderColor: color.BorderColor},
      ]}>
      <View style={[PH(18)]}>
        <NormalText
          text="Andy's savings"
          fontSize={17}
          color="#222222"
          fontFamily={FontFamily.Barlow_Bold}
        />
        <View style={[MT(15), PR(10)]}>
          <Text
            style={{
              color: savingsSectionColors.savingsText,
              fontFamily: FontFamily.Barlow_Semi_bold,
              fontSize: 14,
            }}>
            Saved a total of{' '}
            {<Text style={{color: color.black}}> ₹6,480 </Text>}
            this month and is close to achieving one goal
          </Text>
        </View>
        <View>
          <View
            style={[BG(color.white), BR(10), PH(20), MT(20), {elevation: 1}]}>
            <View
              style={[
                MT(18),
                P(10),
                BLW(1.5),
                MB(10),
                {borderLeftColor: savingsSectionColors.savingsText},
              ]}>
              <NormalText
                text="Playstation 5"
                color={savingsSectionColors.savingsText}
                fontFamily={FontFamily.Barlow_Semi_bold}
              />
              <Text
                style={{
                  color: color.black,
                  fontFamily: FontFamily.Barlow_Semi_bold,
                  lineHeight: 25,
                }}>
                ₹36,400 saved{' '}
                {
                  <Text
                    style={{
                      color: savingsSectionColors.savingsText,
                      fontWeight: '700',
                      fontSize: 14,
                    }}>
                    of ₹40,000 goal
                  </Text>
                }
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[P(18), BG('#f1ecf7'), BBR(10), BBL(10), MT(20)]}>
        <NormalText
          text="Add and view golas >"
          color="#6673Ae"
          fontFamily={FontFamily.Barlow_Semi_bold}
        />
      </View>
    </View>
  );
};

export default Savings;
