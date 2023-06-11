const express = require("express");
const router = express.Router();
const clientControllers = require("../controllers/client");

router.get("/", clientControllers.getAllclient);

router.get("/:id",clientControllers.getclientByid)


router.put("/:id",clientControllers.updateclient)


router.delete("/:id",clientControllers.deleteclient)


router.post("/", clientControllers.createclient);

module.exports = router;