const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.student = require("./student.model.js")(mongoose);
db.category = require("./categories.model.js")(mongoose);
db.room = require("./rooms.model.js")(mongoose);
db.guest = require("./guests.model.js")(mongoose);
db.service = require("./services.model.js")(mongoose);
db.student_service = require("./student_services.model.js")(mongoose);
db.parking = require("./parkings.model.js")(mongoose);
db.parking_transactions = require("./parking_transactions.model.js")(mongoose);
db.student_bills = require("./student_bills.model.js")(mongoose);

module.exports = db;
