import { Module } from 'magnet-core/module'

export default class MagnetSequelizeStart extends Module {
  init () {
    this.moduleName = 'sequelize'
    this.defaultConfig = __dirname
  }

  async setup () {
    if (this.config.sync) {
      await this.app.sequelize.sync(this.config.sync)
    }
  }
}
