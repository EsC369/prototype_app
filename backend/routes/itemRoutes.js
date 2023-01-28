const express = require("express");
const router = express.Router();
const {getItems, setItem, updateItem, deleteItem} = require("../controllers/itemController");

router.route("/").get(getItems).post(setItem);
router.route("/:id").get(updateItem).post(deleteItem);

module.exports = router;
