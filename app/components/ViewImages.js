import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Image from './Image';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ViewImages extends Component {
  static propTypes = {
    images: PropTypes.array,
  };
  
  static defaultProps = {
    images: [],
  };
  
  render() {
    return (
      <View>
        <Text style={styles.title}>Native Images</Text>
        <View style={styles.container}>
          {this.props.images.map(image => (
            <Image key={image.id} image={image}/>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 35,
    padding: 15,
    fontWeight: 'bold',
  },
});

export default ViewImages;