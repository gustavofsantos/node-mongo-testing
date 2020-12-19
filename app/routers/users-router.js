const { connect } = require("../../db/mongo");

async function usersRouter(fastify) {
  const db = await connect();

  fastify.get("/users", async (req, reply) => {
    const users = await db.collection("users").find({}).toArray();

    reply.send(users);
  });
}

module.exports = usersRouter;
