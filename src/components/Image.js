import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

//stupid component, there is the main functionality - rendering
export default props => {
  const {urls, description, user} = props.data;
  const {img, txt, noTxt, nameTxt} = styles;
  return (
    <View>
      <TouchableOpacity onPress={() => props.photoHandler(urls.regular)}>
        <Image style={img} source={{uri: urls.small}} />
        {description ? (
          <Text style={txt}>{description}</Text>
        ) : (
          <Text style={noTxt}>missing title</Text>
        )}
        <Text style={nameTxt}>{user.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {width: 150, height: 150, margin: 10},
  txt: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 100,
  },
  noTxt: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 100,
    color: 'silver',
  },
  nameTxt: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 100,
    fontWeight: 'bold',
  },
});
