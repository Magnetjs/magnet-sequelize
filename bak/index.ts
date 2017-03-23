import * as Sequelize from 'sequelize'
import convert from 'magnet-core/convert'

import defaultConfig from './config/sequelize'

export default convert(Sequelize, {
  namespace: 'sequelize',
  params: ['config.database', 'config.user', 'config.password', 'config']
}, defaultConfig)
