const db = require("../models");
const idTrigger = require('./idTrigger');
const dropTrigger = require('./dropTrigger');

module.exports = {
  createTables: async function () {
    await db.sequelize
      .authenticate()
      .then(() => console.log("database connected"))
      .catch((err) => console.log(err));
    await db.sequelize.sync();
    db.sequelize
      .query(dropTrigger)
      .then(
          db.sequelize.query(idTrigger)
      )
      .catch((err) => console.log(err));
  },
};


