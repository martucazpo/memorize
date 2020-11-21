const db = require("../models");

module.exports = {
  addMaterial: function (document, body, res) {
    let {subdocument, text, user } = body;
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
  },
  updateOneDocumentTitle: function (id, document, res) {
    db.sequelize
    .query(`UPDATE documents SET document = '${document}' WHERE id = '${id}'`)
    .then((data) => {
      if(data[0].warningStatus === 0){
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    })
    .catch(((err) => console.log(err)))
  },
  updateOneDocumentSubdocument: function (id, subdocument, res) {
    db.sequelize
    .query(`UPDATE documents SET subdocument = '${subdocument}' WHERE id = '${id}'`)
    .then((data) => {
      console.log(data[0].warningStatus);
      if(data[0].warningStatus === 0){
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    })
    .catch(((err) => console.log(err)))
  },
  updateDocumentTitle: function (title, oldTitle, res) {
  db.sequelize
  .query(`UPDATE documents SET document = '${title}' WHERE document = '${oldTitle}'`)
  .then((data) => {
    if(data[0].warningStatus === 0){
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  })
  .catch(((err) => console.log(err)));
},
updateSubdocumentTitle: function (title, oldSubdocumentTitle, res) {
  db.sequelize
  .query(`UPDATE documents SET subdocument = '${title}' WHERE subdocument = '${oldSubdocumentTitle}'`)
  .then((data) => {
    if(data[0].warningStatus === 0){
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  })
  .catch(((err) => console.log(err)));
}
};
