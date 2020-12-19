const dotenv = require("dotenv");
dotenv.config({ path: ".env.test" });

const { disconnect, connect } = require("./db/mongo");
const users = require("./tests/fixtures/users");

let db;
beforeAll(async () => {
  db = await connect();
});

beforeEach(async () => {
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
  }

  await db.collection("users").insertMany(users);
});

afterAll(async () => {
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
    await coll.dropIndexes();
    await coll.drop();
  }

  await disconnect();
});
