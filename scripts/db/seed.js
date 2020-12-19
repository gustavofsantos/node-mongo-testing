const { connect } = require("../../db/mongo");
const { seed } = require("../../db/seeder");

async function run() {
  const db = await connect();

  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany({});
    await coll.dropIndexes();
    await coll.drop();
  }

  await seed(db);
}

run()
  .then(() => {
    console.log("Seed done");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Seed error:", err);
    process.exit(1);
  });
