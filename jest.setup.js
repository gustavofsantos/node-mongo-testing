const { disconnect, connect } = require("./db/mongo");
const users = require("./tests/fixtures/users");

beforeEach(async () => {
  const db = await connect();
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
  }

  await db.collection("users").insertMany(users);
});

afterAll(async () => {
  await disconnect();
});
