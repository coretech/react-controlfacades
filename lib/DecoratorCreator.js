'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = DecoratorCreator;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function DecoratorCreator(defaultOptions) {
  return function (fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // It was called without a facade component. That means it's being used as
      // as a decorator.
      if (typeof args[0] !== 'function') {
        var _ret = (function () {
          var options = args[0];

          return {
            v: function (Facade) {
              return fn(Facade, _extends({}, defaultOptions, options));
            }
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }

      // Otherwise, it was called as a normal function.
      var Facade = args[0];
      var options = args[1];
      var rest = args.slice(2);

      return fn.apply(undefined, [Facade, _extends({}, defaultOptions, options)].concat(_toConsumableArray(rest)));
    };
  };
}

module.exports = exports['default'];