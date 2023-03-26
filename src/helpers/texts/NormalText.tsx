import React from 'react';
import {Text} from 'react-native';
import {FF, FS} from '../styles';

interface IText {
  text: string;
  fontSize: number;
  color: string;
  fontFamily: string;
}

const NormalText: React.FC<IText> = ({text, fontSize, color, fontFamily}) => {
  return (
    <Text style={[FS(fontSize), {color: color}, FF(fontFamily)]}>{text}</Text>
  );
};

export default NormalText;
