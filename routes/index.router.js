const { Router} = require("express");
const {greet,welcome,protected} = require ("../controllers/index.controller")
const { authRequire} = require("../middleware/auth.middleware");


const indexRouter = Router();
indexRouter.use((re ,res, next) =>{
    console.log("Specific Route");
    next();
});

 indexRouter.get("/",welcome);
 indexRouter.get("/greet",greet);
 indexRouter.post("/protected",authRequire,protected);

module.exports = indexRouter;