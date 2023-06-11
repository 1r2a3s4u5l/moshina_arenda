const express = require("express");
const router = express.Router();
const rentControllers = require("../controllers/rent");

router.get("/", rentControllers.getAllrent);

router.get("/:id",rentControllers.getrentByid)


router.put("/:id",rentControllers.updaterent)


router.delete("/:id",rentControllers.deleterent)


router.post("/", rentControllers.createrent);

module.exports = router;