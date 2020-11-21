const router = require("express").Router();
const materialControllers = require("../controllers/materialControllers");

router.route("/:document").post(materialControllers.addMaterial)

module.exports = router;
