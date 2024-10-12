module.exports = mongoose => {
  const schema = mongoose.Schema({
    student_id: String, rent: Number, service_bill: Number, parking_free: Number, total_fee: Number
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("student_bills", schema);
};
