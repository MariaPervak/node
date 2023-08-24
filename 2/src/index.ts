import fastify from "fastify";


const start = async () => {

  const app = fastify({
    logger: true,
  })

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
      reply.send({ hello: 'world' })
    }
  })

  try {
    await app.listen({
      port: 3000,
      host: 'localhost',
    });

  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();