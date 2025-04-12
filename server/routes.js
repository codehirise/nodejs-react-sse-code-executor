
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const apiroutes = require("./api");

router.get("/userdata", apiroutes.getuserdata);

module.exports = router;