const { Router } = require("express");
const { login,register }= require("../controllers")

const authRouter = Router();


 authRouter.get("/login",login);
 authRouter.get("/register",register);

 module.exports =authRouter