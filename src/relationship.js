import Base from 'magnet-core/base'
import path from 'path'
import defaultConfig from './config/sequelize'

const relationships = require(
  path.resolve(
    process.cwd(),
    'dist',
    'server',
    'models',
    'relationships'
  )
)

export default class SequelizeRelationship extends Base {
  async setup () {
    const config = Object.assign(defaultConfig, this.config.sequelize, this.options)

    relationships.relationships(this.app)
    // All relationships should locate in server/models/relationships.js

    if (config.sync) {
      await this.app.sequelize.sync(config.sync)
    }
  }
}
