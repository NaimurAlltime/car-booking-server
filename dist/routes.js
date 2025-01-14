"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const cars_routes_1 = __importDefault(require("./modules/cars/cars.routes"));
const location_routes_1 = __importDefault(require("./modules/location/location.routes"));
const search_routes_1 = __importDefault(require("./modules/search/search.routes"));
const payment_routes_1 = __importDefault(require("./modules/payment/payment.routes"));
const router = express_1.default.Router();
const routes = [
    {
        path: "/auth",
        route: auth_routes_1.default,
    },
    {
        path: "/location",
        route: location_routes_1.default,
    },
    {
        path: "/cars",
        route: cars_routes_1.default,
    },
    {
        path: "/search",
        route: search_routes_1.default,
    },
    {
        path: "/payments",
        route: payment_routes_1.default,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
