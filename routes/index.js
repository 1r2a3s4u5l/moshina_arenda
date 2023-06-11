const express = require("express");
const router = express.Router();
const price_typeRoutes = require("./price_type");
const rentRoutes = require("./rent");
const clientRoutes = require("./client");
const carRoutes = require("./car");

router.use("/price_type", price_typeRoutes);
router.use("/rent", rentRoutes);
router.use("/client", clientRoutes);
router.use("/car", carRoutes);
module.exports = router;
