const { UserService } = require("../services/user-service");

async function usersRouter(fastify) {
  const userService = new UserService();
  await userService.connect();

  fastify.get("/users", async (req, reply) => {
    const users = await userService.listAll();
    reply.send(users);
  });
}

module.exports = usersRouter;
