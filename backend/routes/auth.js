const {
    login,
    register,
    getAllUsers,
    logOut,
    getUserById,
  } = require("../controllers/userController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.get("/getuser/:id", getUserById);
  router.get("/logout/:id", logOut);
  
  module.exports = router;
  