async function usersRouter(fastify) {
  fastify.get("/users", (req, reply) => {
    reply.send({ hello: "world" });
  });
}

module.exports = usersRouter;
