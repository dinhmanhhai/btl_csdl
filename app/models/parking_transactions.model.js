module.exports = mongoose => {
  const schema = mongoose.Schema({
    plate: String, date: Date
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("parking_in_out", schema);
};
