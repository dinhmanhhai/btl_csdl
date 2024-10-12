module.exports = app => {
  const controller = require("../controllers/controller.js");

  const router = require("express").Router();

  router.get("/", controller.costPerMonth);

  router.get("/bills", controller.serviceCostPerMonth);

  router.get("/guests", controller.guest);

  router.get("/serviceRevenue", controller.serviceRevenue);


  app.use("/api/v1", router);
};
