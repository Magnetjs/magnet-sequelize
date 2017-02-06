'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _convert = require('magnet-core/convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _convert2.default)(_sequelize2.default, {
  namespace: 'sequelize',
  params: ['config.database', 'config.user', 'config.password', 'config']
});