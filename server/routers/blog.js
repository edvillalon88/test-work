const express = require("express");
const { getActions, getAction, saveAction } = require("../actions/blog.action");
const router = express.Router();

router.get("/actions", getActions);
router.get("/actions/:idAction", getAction);
router.post("/actions", saveAction);

module.exports = router;
