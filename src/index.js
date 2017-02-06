import Sequelize from 'sequelize'
import convert from 'magnet-core/convert'

export default convert(Sequelize, {
  namespace: 'sequelize',
  params: ['config.database', 'config.user', 'config.password', 'config']
})
