const router = require("express").Router();
const { getAllUser } = require("../controllers/banking.controller");

router.get("/alluser", getAllUser);

module.exports = router;
