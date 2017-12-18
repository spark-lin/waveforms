// @flow
import React, { PureComponent } from 'react';
import Transition from 'react-transition-group/Transition';

type Props = {
  isVisible: boolean,
  mountOnEnter: boolean,
  unmountOnExit: boolean,
  duration: number,
  typeName: string,
  children: React$Node,
};

class FadeTransition extends PureComponent<Props> {
  static defaultProps = {
    duration: 500,
    typeName: 'span',
  };

  render() {
    const {
      isVisible,
      mountOnEnter,
      unmountOnExit,
      duration = 500,
      typeName = 'span',
      children,
    } = this.props;

    return (
      <Transition
        in={isVisible}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
        timeout={duration}
      >
        {transitionState =>
          React.createElement(
            typeName,
            {
              style: {
                position: 'static',
                transition: `opacity ${duration}ms`,
                opacity: transitionState === 'entered' ? 1 : 0,
                pointerEvents: transitionState === 'entered' ? 'auto' : 'none',
              },
            },
            children
          )
        }
      </Transition>
    );
  }
}

export default FadeTransition;
