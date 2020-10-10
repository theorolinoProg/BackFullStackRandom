import express from 'express';
const router = express.Router();
import productControllr from "../controllers/product.controller";

router.get("/", productControllr.findAll);
router.post("/", productControllr.create);
router.get("/:id", productControllr.findOne);
router.put("/:id", productControllr.updateProd);
router.delete("/:id", productControllr.delete);

module.exports = router;