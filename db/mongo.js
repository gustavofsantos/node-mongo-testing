const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://admin:admin@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connected = false;

async function connect() {
  if (connected) return client.db("demo-testing");

  await client.connect();
  connected = true;

  return connect();
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };
