"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
// import { RouteHandler, routes } from "./helpers/RouteHandler";
// import "./routes";
// import findDynamicRoute from "./helpers/dynamicRouteHandler";
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const server = http_1.default.createServer((req, res) => {
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const methodMap = routes.get(method);
    const handler = methodMap?.get(path);
    if (handler) {
        handler(req, res);
    }
    else if (findDynamicRoute(method, path)) {
        const match = findDynamicRoute(method, path);
        req.params = match?.params;
        match?.handler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({
            success: false,
            message: "Route not found!!!",
            path,
        }));
    }
});
server.listen(dbConfig_1.default.port, () => {
    console.log(`server is running on port ${dbConfig_1.default.port}`);
});
