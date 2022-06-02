const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  doTransaction,
} = require("../controllers/banking.controller");

router.get("/allusers", getAllUsers);
router.get("/user/:id", getUserById);
router.patch("/transaction", doTransaction);

module.exports = router;
