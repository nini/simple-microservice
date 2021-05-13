"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const container_1 = require("./configuration/container");
const http_server_1 = require("./server/http-server");
const httpServer = container_1.default.get(http_server_1.default);
httpServer.start();
process.on('SIGINT', () => {
    console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
    void shutdown();
});
// quit properly on docker stop
process.on('SIGTERM', () => {
    console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
    void shutdown();
});

// shut down server
async function shutdown() {
    await httpServer.stop();
    process.exit();
}

//# sourceMappingURL=index.js.map
