const express = require("express");
const router = express.Router();
const carControllers = require("../controllers/car");

router.get("/", carControllers.getAllcar);

router.get("/:id",carControllers.getcarByid)


router.put("/:id",carControllers.updatecar)


router.delete("/:id",carControllers.deletecar)


router.post("/", carControllers.createcar);

module.exports = router;