"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const convert_1 = require("magnet-core/convert");
const sequelize_1 = require("./config/sequelize");
exports.default = convert_1.default(Sequelize, {
    namespace: 'sequelize',
    params: ['config.database', 'config.user', 'config.password', 'config']
}, sequelize_1.default);
//# sourceMappingURL=index.js.map