import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {
  BBL,
  BBR,
  BBW,
  BG,
  BR,
  BW,
  FD,
  FontFamily,
  H,
  JC,
  ML,
  MT,
  P,
  PL,
  PT,
  W,
} from '../../helpers/styles';
import NormalText from '../../helpers/texts/NormalText';
import {color, recentTransactionColors} from '../../helpers/colors';

const RecentTransaction = () => {
  interface IData {
    name: string;
    image: string;
    date: string;
    rupees: string;
    id: number;
  }
  const dummyData: IData[] = [
    {
      name: 'Food & Drinks',
      image: require('../../helpers/dashboardImages/Images/burger.png'),
      date: '02:30 pm',
      rupees: '-₹50',
      id: 1,
    },
    {
      name: 'Store sale',
      image: require('../../helpers/dashboardImages/Images/store.png'),
      date: 'Jun - 04:30 pm',
      rupees: '-₹140',
      id: 2,
    },
    {
      name: 'Money credit',
      image: require('../../helpers/dashboardImages/Images/money.png'),
      date: 'Jun - 12:30 pm',
      rupees: '+₹4500',
      id: 3,
    },
  ];

  const renderData = ({item}: IData | any) => {
    return (
      <View
        key={item.id}
        style={[
          BBW(1),
          P(18),
          {borderBottomColor: recentTransactionColors.border},
          BG('#f5f7fb'),
        ]}>
        <View style={[FD('row'), JC('space-between')]}>
          <View style={[FD('row')]}>
            <Image style={[W(50), H(50)]} source={item.image} />

            <View style={[JC('center'), ML(10)]}>
              <NormalText
                text={item.name}
                color={color.black}
                fontSize={15}
                fontFamily={FontFamily.Barlow_Semi_bold}
              />
              <NormalText
                text={item.date}
                color="grey"
                fontSize={11}
                fontFamily={FontFamily.Barlow_Semi_bold}
              />
            </View>
          </View>
          <View style={[JC('center')]}>
            <NormalText
              text={item.rupees}
              color={color.black}
              fontSize={15}
              fontFamily={FontFamily.IBM}
            />
            <Text />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={[
        MT(15),
        BG('#f5f7fb'),
        // H(globalHeight / 2),
        BR(10),
        PT(20),
        BW(),
        {borderColor: recentTransactionColors.border},
      ]}>
      <View style={[PL(18)]}>
        <NormalText
          text="Recent transactions"
          fontSize={17}
          color={recentTransactionColors.heading}
          fontFamily={FontFamily.Barlow_Bold}
        />
      </View>
      <View style={[MT(18)]}>
        <FlatList
          data={dummyData}
          renderItem={renderData}
          keyExtractor={data => data.id}
        />
        <View
          style={[
            P(18),
            BG(recentTransactionColors.background),
            BBR(10),
            BBL(10),
          ]}>
          <NormalText
            text="All transactions >"
            color={recentTransactionColors.transactionText}
            fontFamily={FontFamily.Barlow_Semi_bold}
          />
        </View>
      </View>
    </View>
  );
};

export default RecentTransaction;