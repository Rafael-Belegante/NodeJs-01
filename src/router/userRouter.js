const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");

router.post("/users", authController.VerifyJWT, userController.CreateUser);
router.get("/users", authController.VerifyJWT, userController.GetAllUsers);
router.get("/users/:id", authController.VerifyJWT, userController.GetUsersById);
router.put("/users/:id", authController.VerifyJWT, userController.UpdateUser);
router.delete("/users/:id", authController.VerifyJWT, userController.DeleteUser);

module.exports = router;