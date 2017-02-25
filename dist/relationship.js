"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const path = require("path");
const sequelize_1 = require("./config/sequelize");
class SequelizeRelationship extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.prepareConfig('sequelize', sequelize_1.default);
            const relationships = require(path.resolve(process.cwd(), config.relationshipFile));
            relationships.relationships(this.app);
            if (config.sync) {
                yield this.app.sequelize.sync(config.sync);
            }
        });
    }
}
exports.default = SequelizeRelationship;
//# sourceMappingURL=relationship.js.map