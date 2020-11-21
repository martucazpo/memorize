const db = require("../models");

module.exports = {
  addMaterial: function (document, body, res) {
    let { subdocument, text, user } = body;
    db.sequelize
      .query(
        `INSERT INTO documents (document, subdocument, text, user, createdAt, updatedAt) VALUES ('${document}', '${subdocument}', '${text}', '${user}', current_timestamp(), current_timestamp())`
      )
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  deleteOneDocument: function (id, res) {
    db.sequelize
      .query(`DELETE FROM documents WHERE id = '${id}'`)
      .then((data) => {
        if (data[0].affectedRows === 1) {
          res.send("document has been deleted");
        } else if (data[0].affectedRows === 0) {
          res.send("document does not seem to be in database");
        } else {
          console.log("I don't know what's happened to the document!");
        }
      })
      .catch((err) => console.log(err));
  },
  deleteSubDocument: function (subdocument, res) {
    db.sequelize
    .query(`DELETE FROM documents WHERE subdocument = '${subdocument}'`)
      .then((data) => {
        if (data[0].affectedRows >= 1) {
          res.send("documents have been deleted");
        } else if (data[0].affectedRows === 0) {
          res.send("documents do not seem to be in database");
        } else {
          console.log("I don't know what's happened to the document!");
        }
      })
      .catch((err) => console.log(err));
  },
  deleteDocuments: function(document, res) {
    db.sequelize
    .query(`DELETE FROM documents WHERE document = '${document}'`)
    .then((data) => {
      if (data[0].affectedRows >= 1) {
        res.send("documents have been deleted");
      } else if (data[0].affectedRows === 0) {
        res.send("documents do not seem to be in database");
      } else {
        console.log("I don't know what's happened to the document!");
      }
    })
    .catch((err) => console.log(err));
  }
};
