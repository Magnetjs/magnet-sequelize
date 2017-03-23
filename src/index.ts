import { Module } from 'magnet-core/module'
import * as Sequelize from 'sequelize'

export default class MagnetSequelize extends Module {
  get moduleName () { return 'sequelize' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(new Sequelize(
      this.config.database,
      this.config.user,
      this.config.password,
      this.config
    ))
  }
}
