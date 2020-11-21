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
  },
  updateOneDocumentTitle: function (req, res) {
    let id = req.params.id;
    let document = req.body.document;
    materialFunctions.updateOneDocumentTitle(id, document, res);
  },
  updateOneDocumentSubdocument: function (req, res) {
    let id = req.params.id;
    let subdocument = req.body.subdocument;
    materialFunctions.updateOneDocumentSubdocument(id, subdocument, res);
  },
  updateDocumentTitle: function (req, res) {
    let oldTitle = req.params.document;
    let title = req.body.title;
    materialFunctions.updateDocumentTitle(title, oldTitle, res);
  },
  updateSubdocumentTitle: function (req, res) {
    let oldSubdocumentTitle = req.params.subdocument;
    let title = req.body.title;
    materialFunctions.updateSubdocumentTitle(title, oldSubdocumentTitle, res);
  }
};
