async function seed(db) {
  await db.collection("users").insertMany([
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
    { name: "Laura", email: "laura@email.com" },
  ]);
}

module.exports = { seed };
