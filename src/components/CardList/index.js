import React from 'react';
import {View, Image, FlatList, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import images from '../../util/pathToImages';

function Card({item}) {
  return (
    <View style={styles.card}>
      <Image
        source={images[item.toLowerCase()]}
        style={{width: 100, height: 100}}
        resizeMode="contain"
      />
      <Text>{item}</Text>
    </View>
  );
}

export default function CardList(props) {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={item => Card(item)}
        keyExtractor={item => item}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp(40),
    height: wp(40),
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
