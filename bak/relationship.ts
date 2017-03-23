import { Module } from 'magnet-core/module'
import * as path from 'path'

import defaultConfig from './config/sequelize'

export default class SequelizeRelationship extends Module {
  async setup () {
    const config = this.prepareConfig('sequelize', defaultConfig)

    const relationships = require(
      path.resolve(
        this.config.baseDirPath,
        config.relationshipFile
      )
    )

    relationships.relationships(this.app)

    if (config.sync) {
      await this.app.sequelize.sync(config.sync)
    }
  }
}
