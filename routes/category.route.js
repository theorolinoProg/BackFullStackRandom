import express from 'express';
const router = express.Router();
import categoryControllr from "../controllers/category.controller";

router.get("/", categoryControllr.findAll);
router.post("/", categoryControllr.create);
router.get("/:id", categoryControllr.findOne);
router.put("/:id", categoryControllr.updateCategory);
router.delete("/:id", categoryControllr.delete);

module.exports = router;