"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const start = async () => {
    const app = (0, fastify_1.default)({
        logger: true,
    });
    app.route({
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                name: { type: 'string' },
                excitement: { type: 'integer' }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        handler: function (request, reply) {
            reply.send({ hello: 'world' });
        }
    });
    try {
        await app.listen({
            port: 3000,
            host: 'localhost',
        });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
