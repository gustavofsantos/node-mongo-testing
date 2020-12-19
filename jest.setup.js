const { disconnect } = require("./db/mongo");

afterAll(async () => {
  await disconnect();
});
