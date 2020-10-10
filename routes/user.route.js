import express from 'express';
const router = express.Router();
import userControllr from "../controllers/user.controller";

router.get("/", userControllr.findAll);
router.post("/", userControllr.create);
router.get("/:id", userControllr.findOne);
router.put("/:id", userControllr.updateUser);
router.delete("/:id", userControllr.delete);

module.exports = router;