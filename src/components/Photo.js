import React from 'react';
import {Image, Button} from 'react-native';

//stupid component, there is the main functionality - rendering.
export default props => {
  const {url} = props.navigation.state.params;

  //route switching method
  const {navigate} = props.navigation;
  return (
    <>
      <Button onPress={() => navigate('home')} title="Back" />
      <Image style={{width: '100%', height: '80%'}} source={{uri: url}} />
    </>
  );
};
