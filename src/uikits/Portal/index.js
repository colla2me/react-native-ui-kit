import React, { Component } from 'react';
import { View } from 'react-native';

const TYPE = {
  POPUP: 'popup',
  DIALOG: 'dialog',
  TOAST: 'toast'
}

let setComponentFunc = null;

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: null,
      dialog: null,
      toast: null
    };
  }

  componentDidMount() {
    setComponentFunc = (type, component) => {
      const s = {};
      s[type] = component;
      this.setState(s);
    }
  }

  componentWillUnmount() {
    setComponentFunc = null;
  }

  render() {
    const { popup, dialog, toast } = this.state;
    if (!(popup || dialog || toast)) {
      return null;
    }

    return (
      <View>
        <View>{popup}</View>
        <View>{dialog}</View>
        <View>{toast}</View>
      </View>
    )
  }
}

Portal.renderComponent = (type, component) => {
  if (setComponentFunc) {
    Portal.removeComponent(type);
    setComponentFunc(type, component);
  } else {
    console.warn('Portal is uninitialized');
  }
}

Portal.removeComponent = (type) => {
  if (setComponentFunc) {
    setComponentFunc(type, undefined);
  } else {
    console.warn('Portal is uninitialized');
  }
}

Portal.TYPE = TYPE;

export default Portal;
