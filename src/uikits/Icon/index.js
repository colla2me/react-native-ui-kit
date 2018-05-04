import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Icon extends Component {
  render() {
    const { name, size, color } = this.props;
    return (
      <Ionicons name={name} size={size} color={color}/>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Icon;