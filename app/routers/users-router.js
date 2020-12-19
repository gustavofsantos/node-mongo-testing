const { connect } = require("../../db/mongo");

async function usersRouter(fastify) {
  const db = await connect();

  await db.collection("users").deleteMany({});
  await db.collection("users").insertMany([
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
  ]);

  fastify.get("/users", async (req, reply) => {
    const users = await db.collection("users").find({}).toArray();

    reply.send(users);
  });
}

module.exports = usersRouter;
