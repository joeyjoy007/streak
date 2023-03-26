import React from 'react';
import {
  AI,
  AS,
  BBL,
  BBR,
  BG,
  BR,
  BTL,
  BTR,
  FD,
  FF,
  FS,
  FontFamily,
  H,
  JC,
  ML,
  MR,
  MT,
  P,
  PH,
  PL,
  PT,
  W,
} from '../../helpers/styles';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalHeight, globalWidth} from '../../helpers/dimensions';
import {cardSectionColors, color} from '../../helpers/colors';
import * as Animatable from 'react-native-animatable';

const Section1 = () => {
  return (
    <View style={[JC('space-between'), FD('column')]}>
      <ImageBackground
        style={{width: globalWidth}}
        source={require('../../helpers/dashboardImages/Images/cardBackground.png')}>
        <View style={[P(16), FD('row'), JC('space-between'), PT(29)]}>
          <Image
            style={[H(39), W(41)]}
            source={require('../../helpers/dashboardImages/Images/logo1.png')}
          />
          <Image
            style={[H(37), W(101)]}
            source={require('../../helpers/dashboardImages/Images/andy.png')}
          />
        </View>
        <View style={[P(12)]}>
          {/* new */}
          <Animatable.View
            duration={1200}
            delay={0}
            animation="fadeIn"
            easing="ease-in">
            <View style={[BR(10)]}>
              <View
                style={[
                  BTR(10),
                  BTL(10),
                  // H(globalHeight / 6.5),
                  BG('white'),
                  FD('row'),
                  JC('space-between'),
                ]}>
                <View style={[PL(20), PT(16)]}>
                  <Text
                    style={[
                      FS(17),
                      FF(FontFamily.Barlow_Bold),
                      {color: cardSectionColors.textColor},
                    ]}>
                    Balance
                  </Text>
                  <Text
                    style={[FS(30), FF(FontFamily.IBM), {color: color.black}]}>
                    ₹12,000
                  </Text>
                </View>
                <View>
                  <ImageBackground
                    style={[H(globalHeight / 6.5), W(globalWidth / 2)]}
                    resizeMode="stretch"
                    source={require('../../helpers/dashboardImages/Images/desr.png')}>
                    <ImageBackground
                      style={[H(globalHeight / 7), W(globalWidth / 2)]}
                      resizeMode="stretch"
                      source={require('../../helpers/dashboardImages/Images/Vector_4.png')}>
                      <TouchableOpacity>
                        <Image
                          style={[AS('flex-end'), MR(15), H(40), W(40), MT(15)]}
                          source={require('../../helpers/dashboardImages/Images/eye.png')}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </ImageBackground>
                </View>
              </View>
              <View
                style={[BBR(10), BBL(10), H(globalHeight / 8), BG('#f7E5F7')]}>
                <View>
                  <View style={[PT(16), PH(20)]}>
                    <Text
                      style={[
                        FS(17),
                        {color: cardSectionColors.textColor},
                        FF(FontFamily.Barlow_Bold),
                      ]}>
                      Savings
                    </Text>
                    <View style={[FD('row'), JC('space-between')]}>
                      <Text
                        style={[
                          FS(30),
                          FF(FontFamily.IBM),
                          {color: color.black},
                        ]}>
                        ₹36,800
                      </Text>
                      <TouchableOpacity>
                        <Image
                          style={[H(30), W(100)]}
                          source={require('../../helpers/dashboardImages/Images/save.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Animatable.View>
          {/* for scan */}
          <Animatable.View
            duration={500}
            delay={0}
            animation="fadeIn"
            easing={'ease-in'}>
            <View style={[FD('row'), JC('space-between'), MT(20)]}>
              <TouchableOpacity
                style={[
                  P(5),
                  PH(45),
                  BR(9),
                  BG('#650f57'),
                  FD('row'),
                  JC('space-between'),
                  AI('center'),
                ]}>
                <Text
                  style={{
                    color: color.white,
                    fontFamily: FontFamily.Barlow_Bold,
                  }}>
                  scan code
                </Text>
                <Image
                  style={[ML(5)]}
                  source={require('../../helpers/dashboardImages/Images/scan.png')}
                />
              </TouchableOpacity>

              
              <TouchableOpacity
                style={[
                  P(5),
                  PH(18),
                  BR(9),
                  BG('#650F5C'),
                  FD('row'),
                  JC('space-between'),
                  AI('center'),
                ]}>
                <Image
                  source={require('../../helpers/dashboardImages/Images/arrow.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  P(8),
                  BR(9),
                  BG('#650F5C'),
                  FD('row'),
                  JC('space-between'),
                  AI('center'),
                ]}>
                <Image
                  source={require('../../helpers/dashboardImages/Images/dots.png')}
                />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Section1;
