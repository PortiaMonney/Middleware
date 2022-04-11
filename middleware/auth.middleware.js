const authRequire = (req, res, next) => {
  const body = req.body;
  if (body.username!== "Portia" || body.password !== "secret") {
       return res.send("invalid credential");
  }
  next();
};

module.exports ={
    authRequire,
}