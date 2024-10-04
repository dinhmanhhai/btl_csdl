module.exports = app => {
  const controller = require("../controllers/controller.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.get("/", controller.costPerMonth);
  //
  // // Retrieve all controller
  router.get("/", controller.serviceCostPerMonth);
  //
  // Retrieve all published controller
  router.get("/guests", controller.guest);
  //
  // Retrieve a single Tutorial with id
  router.get("/serviceRevenue", controller.serviceRevenue);
  //
  // // Update a Tutorial with id
  // router.put("/:id", controller.update);
  //
  // // Delete a Tutorial with id
  // router.delete("/:id", controller.delete);
  //
  // // Create a new Tutorial
  // router.delete("/", controller.deleteAll);

  app.use("/api/v1", router);
};
