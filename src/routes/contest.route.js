const express = require("express");
router = express.Router();

contest = require("../controllers/contest.controller");

router.get("/", contest.contest);

module.exports = router;
