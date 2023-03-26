import {Image, ImageBackground, View} from 'react-native';
import React from 'react';
import {AI, BR, H, W} from '../../helpers/styles';
import {globalWidth} from '../../helpers/dimensions';

const AddFlag = () => {
  return (
    <View>
      <ImageBackground
        style={[W(globalWidth), H(100), AI('flex-end')]}
        source={require('../../helpers/dashboardImages/Images/flag.png')}>
        <Image
          style={[W(160), H(30), BR(10)]}
          source={require('../../helpers/dashboardImages/Images/Parental_controls.png')}
        />
      </ImageBackground>
    </View>
  );
};

export default AddFlag;

