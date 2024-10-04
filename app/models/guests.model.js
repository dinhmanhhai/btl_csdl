module.exports = mongoose => {
  const schema = mongoose.Schema({
    name: String, student: String, birth: Date, createAt: Date
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("guest", schema);
};
