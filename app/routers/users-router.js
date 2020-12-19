const { connect } = require("../../db/mongo");

async function usersRouter(fastify) {
  const db = await connect();

  fastify.get("/users", (req, reply) => {
    const users = db.collection("users").find({}).toArray();
    reply.send(users);
  });
}

module.exports = usersRouter;
