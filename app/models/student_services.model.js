module.exports = mongoose => {
  const schema = mongoose.Schema({
    service_id: String, student_id: String
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("student_service", schema);
};
