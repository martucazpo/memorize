const materialFunctions = require("../javascript/materialFunctions");

module.exports = {
  addMaterial: function (req, res) {
    let document = req.params.document;
    let body = req.body;
    materialFunctions.addMaterial(document, body, res);
  },
  deleteOneDocument: function (req, res) {
    let id = req.params.id;
    materialFunctions.deleteOneDocument(id, res);
  },
  deleteSubdocument: function (req, res) {
    let subdocument = req.body.subdocument;
    materialFunctions.deleteSubDocument(subdocument, res);
  },
  deleteDocuments: function (req, res) {
    let document = req.params.document;
    materialFunctions.deleteDocuments(document, res);
  }
};
