const express = require("express");
const router = express.Router();
const price_typeControllers = require("../controllers/price_type");

router.get("/", price_typeControllers.getAllprice_type);

router.get("/:id",price_typeControllers.getprice_typeByid)


router.put("/:id",price_typeControllers.updateprice_type)


router.delete("/:id",price_typeControllers.deleteprice_type)


router.post("/", price_typeControllers.createprice_type);

module.exports = router;