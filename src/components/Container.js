import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ImageComponent from './Image';
import {getAlbum} from '../store/actions/album';
import {getAlbumsFromProps} from '../store/selectors';

class Galery extends React.Component {
  state = {
    images: [],
  };

  // dispatch action for create album array in store
  componentDidMount() {
    this.props.getAlbum();
  }

  //route for someone photo
  photoHandler = url => {
    this.props.navigation.navigate('photo', {
      url: url,
    });
  };

  render() {
    const {scroll} = styles;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={scroll}>
            {this.props.album.map(img => (
              <ImageComponent
                data={img}
                key={img.id}
                photoHandler={this.photoHandler}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

//throw data from store in props
function mapStateToProps(state) {
  return {album: getAlbumsFromProps(state)};
}

export default connect(
  mapStateToProps,
  //there second parameters this is an action to change the state of the store
  {getAlbum},
)(Galery);

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
  },
});
