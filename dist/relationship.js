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
class MagnetSequelizeRelationship extends module_1.Module {
    get moduleName() { return 'sequelize'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const relationships = require(path.resolve(this.app.config.baseDirPath, this.config.relationshipFile));
            relationships.relationships(this.app);
            if (this.config.sync) {
                yield this.app.sequelize.sync(this.config.sync);
            }
        });
    }
}
exports.default = MagnetSequelizeRelationship;
//# sourceMappingURL=relationship.js.map