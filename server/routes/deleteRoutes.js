const router = require('express').Router();
const materialControllers = require('../controllers/materialControllers');

router.route("/:id").get(materialControllers.deleteOneDocument);
router.route("/document/:document").get(materialControllers.deleteDocuments);
router.route("/deleteSubDocument").post(materialControllers.deleteSubdocument);

module.exports = router;