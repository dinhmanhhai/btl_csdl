const {GuestDto} = require('../dto/guest.dto');
const db = require("../models");
const Student = db.student;
const Guest = db.guest;
const Room = db.room;
const StudentService = db.student_service;
const StudentBill = db.student_bills;
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
  StudentBill.find({})
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

exports.guest = (req, res) => {
  Guest.aggregate([
    {
      $match: {
        visit_dates: {
          $elemMatch: {
            $gte: new Date("2024-10-01T00:00:00Z"),
            $lte: new Date("2024-10-05T00:00:00Z")
          }
        }
      }
    },
    {
      $project: {
        name: 1,
        CCCD: 1,
        birth: 1,
        student_id: 1,
        visit_dates: {
          $filter: {
            input: "$visit_dates",
            as: "date",
            cond: {
              $and: [
                { $gte: ["$$date", new Date("2024-10-01T00:00:00Z")] },
                { $lte: ["$$date", new Date("2024-10-05T00:00:00Z")] }
              ]
            }
          }
        }
      }
    }
  ]).then(data => {
    res.send(data);
  }).catch(err => {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  });
};

exports.serviceRevenue = (req, res) => {

  StudentService.aggregate([
    {
      $lookup: {
        from: 'services',
        localField: 'service_id',
        foreignField: '_id',
        as: 'service_info'
      }
    },
    {
      $unwind: '$service_info'
    },
    {
      $group: {
        _id: '$service_id',
        totalPrice: {$sum: '$service_info.price'}
      }
    }
  ]).then(data => {
    res.send(data);
  }).catch(err => {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  });
};

