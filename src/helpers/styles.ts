import {TextStyle, ViewStyle} from 'react-native';

export const HFS = (fontSize?: number): TextStyle => {
  return {fontSize: fontSize || 22};
};

export const NFS = (value: number): TextStyle => {
  return {fontSize: value || 16};
};
export const FW = (value: string | any): TextStyle => {
  return {fontWeight: value || 'bold' || '100' || '200' || 'normal'};
};

export const FlexS = (value: string | any): TextStyle => {
  return {flexShrink: value || 1};
};

export const color = (value?: string): TextStyle => {
  return {color: value || '#222222'};
};

export const BG = (value?: string): TextStyle => {
  return {backgroundColor: value || '#ffd194'};
};

export const H = (height: number | string) => {
  return {height};
};

export const W = (width: number | string) => {
  return {width};
};

export const BW = (value?: 1 | 0.2): TextStyle => {
  return {borderWidth: value || 1 || 0.2};
};

export const BB = (value?: 'black'): TextStyle => {
  return {borderBottomColor: value || 'black'};
};

export const LH = (value?: 25): TextStyle => {
  return {lineHeight: value || 25};
};

export const BC = (value?: 'red' | any): TextStyle => {
  return {borderColor: value || 'red'};
};

export const BR = (value?: 10): TextStyle => {
  return {borderRadius: value || 10};
};

export const AS = (value?: 'center' | 'flex-end'): TextStyle | any => {
  return {alignSelf: value || 'center'};
};

export const BTL = (value?: 10): TextStyle | any => {
  return {borderTopLeftRadius: value || 10};
};

export const BTR = (value?: 10): TextStyle | any => {
  return {borderTopRightRadius: value || 10};
};

export const BBR = (value?: 10): TextStyle | any => {
  return {borderBottomRightRadius: value || 10};
};

export const BBL = (value?: 10): TextStyle | any => {
  return {borderBottomLeftRadius: value || 10};
};
export const BBW = (value?: 1): TextStyle | any => {
  return {borderBottomWidth: value || 1};
};
export const BLW = (value?: 1): TextStyle | any => {
  return {borderLeftWidth: value || 1};
};

export const TA = (value?: 'string'): TextStyle | any => {
  return {textAlign: value || 'right'};
};

export const AI = (value?: 'center'): TextStyle => {
  return {
    alignItems:
      value ||
      'center' ||
      'flex-start' ||
      'flex-end' ||
      'baseline' ||
      'stretch',
  };
};

export const FD = (value?: 'column' | 'row'): ViewStyle => {
  return {flexDirection: value || 'row'};
};

export const F = (value?: 1): ViewStyle => {
  return {flex: value || 1};
};

export const JC = (
  value?: 'space-between' | 'center' | 'flex-end' | 'space-evenly',
): ViewStyle => {
  return {
    justifyContent:
      value ||
      'center' ||
      'flex-end' ||
      'flex-start' ||
      'space-around' ||
      'space-between' ||
      'space-evenly',
  };
};

export const MT = (value?: number | string): TextStyle => {
  return {marginTop: value || 15};
};

export const ML = (value?: number | string): TextStyle => {
  return {marginLeft: value || 15};
};

export const MR = (value?: number): TextStyle => {
  return {marginRight: value || 15};
};

export const MB = (value?: number): TextStyle => {
  return {marginBottom: value || 15};
};

export const P = (value?: number): TextStyle => {
  return {padding: value || 15};
};

export const PT = (value?: number): TextStyle => {
  return {paddingTop: value || 15};
};

export const PL = (value?: number): TextStyle => {
  return {paddingLeft: value || 15};
};

export const PH = (value?: number): TextStyle => {
  return {paddingHorizontal: value || 15};
};

export const PV = (value?: number): TextStyle => {
  return {paddingVertical: value || 15};
};

export const PR = (value?: number): TextStyle => {
  return {paddingRight: value || 15};
};

export const PB = (value?: number): TextStyle => {
  return {paddingBottom: value || 15};
};
export const FF = (value?: string): TextStyle => {
  return {fontFamily: value || FontFamily.Barlow_Semi_bold};
};

export const FS = (value?: number): TextStyle => {
  return {fontSize: value || 14};
};

export const FontFamily = {
  Barlow_Black: 'Barlow-Black',
  Barlow_Bold: 'Barlow-Medium',
  IBM: 'IBMPlexMono-SemiBold',
  Barlow_Semi_bold: 'Barlow-SemiBold',
};
