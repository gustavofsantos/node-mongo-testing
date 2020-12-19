const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://admin:admin@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  await client.connect();
  return client.db("demo-testing");
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };
