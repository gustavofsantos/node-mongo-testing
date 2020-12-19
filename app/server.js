const fastify = require("fastify")({ logger: true });

fastify.register(require("./routers/users-router"), {
  prefix: "/api/v1",
});

fastify.listen(3000, (err, addr) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${addr}`);
});
