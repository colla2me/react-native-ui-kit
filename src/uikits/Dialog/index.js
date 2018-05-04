import React from 'react';
import { View, Animated, Easing, Modal, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { windowHeight } from '../../utils/screen';
import styles from './index.style';

const propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  style: View.propTypes.style,
  children: PropTypes.node,
  onDismiss: PropTypes.func.isRequired
};

const defaultProps = {
  title: 'title',
  visible: false,
  style: {},
  children: null,
  onDismiss: () => {}
};

class Dialog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      fade: new Animated.Value(0),
      translate: new Animated.ValueXY(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const willBeVisible = nextProps.visible;
    if (willBeVisible !== this.props.visible) {
      if (willBeVisible) {
        this.setState({ visible: true }, () => {
          this.startAnimation(true);
        });
      } else {
        this.startAnimation(false, () => {
          this.setState({ visible: false });
        });
      }
    }
  }

  startAnimation(show, callback) {
    const { fade, translate } = this.state;
    const commonConfig = {
      duration: 400,
      easing: Easing.inOut(Easing.ease)
    };
    const fromPoint = { x: 0, y: 0 };
    const toPoint = { x: 0, y: windowHeight };
    if (show) {
      this.state.translate.setValue(toPoint);
    }
    Animated.parallel([
      Animated.timing(fade, {
        toValue: show ? 1 : 0,
        ...commonConfig,
      }),
      Animated.timing(translate, {
        toValue: show ? fromPoint : toPoint,
        ...commonConfig,
      })
    ]).start(callback);
  }

  renderHeader() {
    const { title, onDismiss } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.closeBtn} onPress={onDismiss}>
          <Icon
            name="ios-close"
            size={32}
            color="#c7c7c7"
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { onDismiss, style } = this.props;
    const { visible, translate, fade } = this.state;
    const transform = {
      transform: [{
        translateY: translate.y
      }]
    };
    return (
      <Modal
        transparent
        visible={visible}
        animationType={'none'}
        onRequestClose={onDismiss}
      >
        <TouchableWithoutFeedback onPress={onDismiss}>
          <Animated.View style={[
            styles.maskLayer,
            { opacity: fade }]}
          />
        </TouchableWithoutFeedback>

        <Animated.View style={[
          styles.container,
          style,
          transform]}
        >
          {this.renderHeader()}
          <ScrollView>
            {this.props.children}
          </ScrollView>
        </Animated.View>
      </Modal>
    );
  }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;