module.exports = app => {
    const companies = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/phones/:phoneId/companies", companies.create);
  
    router.get("/phones/:phoneId/companies", companies.findAll);
  
    router.get("/phones/:phoneId/companies/:companyId", companies.findOne);
  
    router.put("/phones/:phoneId/companies/:companyId", companies.update);
  
    router.delete("/phones/:phoneId/companies/:companyId", companies.delete);
  
    app.use('/api', router);
};