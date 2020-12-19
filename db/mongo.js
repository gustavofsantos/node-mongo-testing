const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb://admin:admin@localhost:27017/demo-testing",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function connect() {
  await client.connect();
  return client.db;
}

module.exports = { connect };
