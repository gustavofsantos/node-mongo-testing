const { connect } = require("../../db/mongo");

class UserService {
  constructor() {
    this._db = undefined;
  }

  async connect() {
    this._db = await connect();
  }

  listAll() {
    return this._db.collection("users").find().toArray();
  }
}

module.exports = { UserService };
