const express = require("express");
const router = express.Router();

const todoGetController = require("../controllers/todoGetController");

router.get("/todos", todoGetController.showAll);
router.get("/todos/:id", todoGetController.showById);
router.post("/todos", todoGetController.create);
router.put("/todos/:id", todoGetController.editById);
router.delete("/todos/:id", todoGetController.delete);

module.exports = router;
