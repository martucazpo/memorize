const router = require("express").Router();
const materialControllers = require("../controllers/materialControllers");

router.route("/:document").post(materialControllers.addMaterial);
router.route("/update/title/:id").post(materialControllers.updateOneDocumentTitle);
router.route("/update/document/:document").post(materialControllers.updateDocumentTitle);
router.route("/update/subdocument/:subdocument").post(materialControllers.updateSubdocumentTitle);
router.route("/update/subdocument/:id").post(materialControllers.updateOneDocumentSubdocument);

module.exports = router;
