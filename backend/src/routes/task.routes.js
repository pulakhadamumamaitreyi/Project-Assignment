const router = require("express").Router();
const auth = require("../middleware/auth");
const c = require("../controllers/task.controller");

router.post("/", auth, c.createTask);
router.get("/", auth, c.getTasks);

module.exports = router;
