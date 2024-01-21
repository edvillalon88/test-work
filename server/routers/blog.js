const express = require("express");
const { getActions } = require("../actions/blog.action");
const router = express.Router();

router.get("/actions", getActions);
router.get("/actions/:idAction", getAction);
router.get("/actions", saveAction);

module.exports = router;
