import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  AI,
  BBL,
  BBR,
  BG,
  BR,
  BW,
  FD,
  FF,
  FS,
  FontFamily,
  H,
  JC,
  MB,
  MT,
  P,
  PH,
  PT,
} from '../../helpers/styles';
import NormalText from '../../helpers/texts/NormalText';
import {color, gameOfTheDayColors} from '../../helpers/colors';
import axios from 'axios';

const GameOfTheDay = () => {
  const number = '1234';
  const splitedNumber = number.split('');
  const [numbers, setNumbers] = React.useState(splitedNumber);
  const [loading, setLoading] = React.useState(false);
  const getNumber = async () => {
    try {
      setLoading(true);
      const getPin = await axios
        .get('https://production.streakcard.click/test/getlist')
        .then((response: any) => {
          console.log('response ==> ', response.data);
          setLoading(false);
          setNumbers(response.data.data.split(''));
        })
        .catch((err: any) => {
          setLoading(false);
          console.log('Error occured ==> ', err.message);
        });
    } catch (error: any) {
      setLoading(false);
      console.log('Error occured ==> ', error.message);
    }
  };

  return (
    <View
      style={[
        MT(15),
        BG(gameOfTheDayColors.containerBackground),
        // H(globalHeight / 2),
        BR(10),
        PT(20),
        BW(),
        {borderColor: color.BorderColor},
      ]}>
      <View style={[PH(18)]}>
        <NormalText
          text="Game of the day"
          fontSize={17}
          color={gameOfTheDayColors.heading}
          fontFamily={FontFamily.Barlow_Bold}
        />
        <View>
          <View
            style={[
              BG('#fbf7f5'),
              BR(10),
              PH(20),
              MT(20),
              BW(2),
              FD('row'),
              JC('space-between'),
              {borderColor: gameOfTheDayColors.numberBackground},
            ]}>
            {numbers?.map((e: number,i: number) => {
              return (
                <View
                  key={i}
                  style={[
                    MT(18),
                    P(10),
                    MB(10),
                    H(70),
                    BG(gameOfTheDayColors.numberBackground),
                    BR(10),
                    P(15),
                    JC('center'),
                  ]}>
                  <Text style={[FS(20), FF(FontFamily.Barlow_Bold)]}>{e}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={[AI('center')]}>
          <View style={[AI('center'), MT(15)]}>
            <Text
              style={{
                color: gameOfTheDayColors.textColor,
                fontFamily: FontFamily.Barlow_Semi_bold,
              }}>
              Win prizes worth ₹4000 or more.{' '}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => getNumber()}
            style={[
              AI('center'),
              MT(15),
              H(45),
              JC('center'),
              P(10),
              BR(23),
              BG(gameOfTheDayColors.textColor),
            ]}>
            <Text
              style={{
                color: color.white,
                fontFamily: FontFamily.Barlow_Semi_bold,
              }}>
              {loading ? (
                <ActivityIndicator color={color.white} />
              ) : (
                'Try your luck'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          P(18),
          BG(gameOfTheDayColors.backgroundColor),
          BBR(10),
          BBL(10),
          MT(20),
        ]}>
        <NormalText
          text="Add and view golas >"
          color={gameOfTheDayColors.textColor}
          fontFamily={FontFamily.Barlow_Bold}
        />
      </View>
    </View>
  );
};

export default GameOfTheDay;

const styles = StyleSheet.create({});
