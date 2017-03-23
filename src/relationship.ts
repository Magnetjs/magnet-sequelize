import { Module } from 'magnet-core/module'
import * as path from 'path'

import defaultConfig from './config/sequelize'

export default class MagnetSequelizeRelationship extends Module {
  get moduleName () { return 'sequelize' }
  get defaultConfig () { return __dirname }

  async setup () {
    const relationships = require(
      path.resolve(
        this.app.config.baseDirPath,
        this.config.relationshipFile
      )
    )

    relationships.relationships(this.app)

    if (this.config.sync) {
      await this.app.sequelize.sync(this.config.sync)
    }
  }
}
