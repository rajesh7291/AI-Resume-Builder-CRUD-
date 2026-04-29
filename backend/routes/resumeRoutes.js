const router = require("express").Router();
const ctrl = require("../controllers/resumeController");

router.post("/create", ctrl.createResume);
router.get("/all", ctrl.getAllResume);

module.exports = router;
