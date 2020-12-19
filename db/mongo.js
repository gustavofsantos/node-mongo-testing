const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connected = false;

async function connect() {
  if (connected) return client.db(process.env.MONGO_DATABASE);

  await client.connect();
  connected = true;

  return connect();
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };
