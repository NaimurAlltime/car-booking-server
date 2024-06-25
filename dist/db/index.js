"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../modules/user/user.model");
//pass: Naimur12345
const superAdminInfo = {
    email: "naimur@gmail.com",
    password: "$2y$10$LDfD0eogy./v24PKbLXZpOfk4W8nA78GlFvnLTBGxGeneWHamu12W",
};
const seedSuperAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    // check is super admin is exists
    const superAdmin = yield user_model_1.User.findOne({ email: "naimur@gmail.com" });
    if (!superAdmin) {
        yield user_model_1.User.create(superAdminInfo);
    }
});
exports.default = seedSuperAdmin;
