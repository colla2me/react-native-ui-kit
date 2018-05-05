import React, { Component } from 'react';
import { Animated, View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import styles from './index.style';

const propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node
}

const renderIcon = (icon) => {
  if (icon === 'loading') {
    return <ActivityIndicator color="#fff" style={{marginRight: 6}} />
  }
  return <Icon name={icon} style={styles.icon} />
}

class Toast extends Component {
  render() {
    const { icon, children } = this.props;
    return (
      <Animated.View style={[styles.container, {bottom: this.state.bottom}]}>
        <View style={styles.content}>
          {icon && renderIcon(icon)}
          <Text style={styles.text}>{children}</Text>
        </View>
      </Animated.View>
    )
  }
}

const processOptions = (options = {}) => {
  if (typeof options === 'string') {
    options = {
        children: options
    }
  }
  return options;
}

let timer = null;

Object.assign(Toast, {
  clear() {
    Portal.removeComponent(Portal.TYPE.TOAST);
  },

  tip(options, icon) {
    clearTimeout(timer);
    options = processOptions(options);
    Portal.renderComponent(Portal.TYPE.TOAST, <Toast icon={icon} {...options}/>);
    if (options.time !== false && options.time !== 0) {
      timer = setTimeout(() => {
        Portal.removeComponent(Portal.TYPE.TOAST);
      }, options.time || 2000);
    }
  },

  success(options) {
    Toast.tip(options, 'check');
  },

  info(options) {
    Toast.tip(options, 'info-circle');
  },

  warning(options) {
    Toast.tip(options, 'exclamation-triangle');
  },

  danger(options) {
    Toast.tip(options, 'times-circle');
  },

  loading(options) {
    options = processOptions(options);
    Toast.tip(Object.assign({children: '加载中...'}, options), 'loading');
  }
});

Toast.propTypes = propTypes;

export default Toast;
