'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PropTypes = _react2['default'].PropTypes;

var controlStyles = {
  display: 'block',
  position: 'absolute',
  opacity: 0,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: '1px solid #000' };

/**
 * A wrapper for checkboxes that uses the expected control interface (`value`,
 * `defaultValue`, `onChange`).
 */
// Needed to make sure some browsers actually make the element 100% x 100%

var CheckboxControl = (function (_React$Component) {
  _inherits(CheckboxControl, _React$Component);

  function CheckboxControl() {
    _classCallCheck(this, CheckboxControl);

    _get(Object.getPrototypeOf(CheckboxControl.prototype), 'constructor', this).apply(this, arguments);
  }

  /**
   * A wrapper for `<select>`s that uses the expected control interface (`value`,
   * `defaultValue`, `onChange`).
   */

  _createClass(CheckboxControl, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.onChange) this.props.onChange(!!event.currentTarget.checked);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      if (this.props.onFocus) this.props.onFocus(event);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      if (this.props.onBlur) this.props.onBlur(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _extends(this.props);
      delete props.checked;
      delete props.defaultChecked;

      return _react2['default'].createElement('input', _extends({
        defaultChecked: this.props.defaultValue,
        checked: this.props.value,
        style: controlStyles
      }, this.props, {
        type: 'checkbox',
        onChange: this.handleChange.bind(this),
        onFocus: this.handleFocus.bind(this),
        onBlur: this.handleBlur.bind(this)
      }));
    }
  }], [{
    key: 'propTypes',
    value: {
      defaultValue: PropTypes.bool,
      value: PropTypes.bool,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      defaultValue: false
    },
    enumerable: true
  }]);

  return CheckboxControl;
})(_react2['default'].Component);

exports.CheckboxControl = CheckboxControl;

var SelectControl = (function (_React$Component2) {
  _inherits(SelectControl, _React$Component2);

  function SelectControl() {
    _classCallCheck(this, SelectControl);

    _get(Object.getPrototypeOf(SelectControl.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SelectControl, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.onChange) this.props.onChange(event.currentTarget.value);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      if (this.props.onFocus) this.props.onFocus(event);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      if (this.props.onBlur) this.props.onBlur(event);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'select',
        _extends({
          style: controlStyles
        }, this.props, {
          onChange: this.handleChange.bind(this),
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this)
        }),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: PropTypes.node,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func
    },
    enumerable: true
  }]);

  return SelectControl;
})(_react2['default'].Component);

exports.SelectControl = SelectControl;