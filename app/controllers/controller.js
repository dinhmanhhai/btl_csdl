const { GuestDto } = require('../dto/guest.dto');
const db = require("../models");
const Student = db.student;
const Guest = db.guest;
const Room = db.room;
const StudentService = db.student_service;
const Category = db.category;
const Parking = db.parking;
const ParkingInOut = db.parking_transactions;
const Service = db.service;

exports.costPerMonth = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }

  // Create a student
  const student = new Student({
    _id: req.id,
    name: req.name,
    CCCD: req.CCCD,
    birth: req.date,
    class: req.class,
    hometown: req.hometown
  });

  student
  .save(student)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the student."
    });
  });
};

exports.serviceCostPerMonth = (req, res) => {

};

exports.guest = (req, res) => {
  Guest.find({})
  .then(data => {
    if (!data) {
      res.status(404).send({message: "Not found"});
    } else {
      res.send(data);
    }
  })
  .catch(err => {
    res
    .status(500)
    .send({message: "Error retrieving: " + err});

  });
};

exports.serviceRevenue = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({message: "Content can not be empty!"});

  }

};

