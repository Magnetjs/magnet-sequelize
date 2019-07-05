import { Module } from 'magnet-core/module'
import * as path from 'path'

export default class MagnetSequelizeRelationship extends Module {
  init () {
    this.moduleName = 'sequelize'
    this.defaultConfig = __dirname
  }

  async setup () {
    const relationships = require(
      path.resolve(
        this.app.config.baseDirPath,
        this.config.relationshipFile
      )
    )

    relationships.relationships(this.app)

    if (this.config.sync) {
      await this.app.sequelize.sync(this.config.sync);
    }
  }
}
