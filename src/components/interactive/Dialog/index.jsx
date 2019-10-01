import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import DenyIcon from '../../../../lib/icons/react/DenyIcon';
import Flex from '../../layout/Flex';
import FlexItem from '../../layout/FlexItem';

const onKeyDown = (e) => e.keyCode === 27;

const Dialog = (props) =>
  ReactDOM.createPortal(
    <CSSTransition timeout={200}>
      <React.Fragment>
        {props.isOpen && (
          <React.Fragment>
            <div className="dialog-overlay" onClick={props.onDismiss}></div>
            <div
              className="dialog elevation--3"
              role="dialog"
              tabIndex="-1"
              onKeyDown={(e) => onKeyDown(e) && props.onDismiss()}
            >
              {(props.title || props.canDismiss) && (
                <React.Fragment>
                  <div className="dialog-header">
                    <Flex justify="spaceBetween" align="start">
                      <FlexItem>
                        <div className="dialog-title type--head4">{props.title}</div>
                      </FlexItem>
                      <FlexItem shrink>
                        <button className="dialog-icon" onClick={props.onDismiss}>
                          <DenyIcon size="xs" />
                        </button>
                      </FlexItem>
                    </Flex>
                  </div>
                  <div className="dialog-divider" />
                </React.Fragment>
              )}
              <div className="dialog-content">{props.content}</div>
              {props.footerContent && (
                <div className="dialog-footer">{props.footerContent}</div>
              )}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    </CSSTransition>,
    // eslint-disable-next-line no-undef
    document.body
  );

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  canDismiss: PropTypes.bool,
  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  title: PropTypes.string,
};

export default Dialog;
