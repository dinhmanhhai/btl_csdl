module.exports = mongoose => {
  const schema = mongoose.Schema({
    _id: String,
    name: String,
    CCCD: String,
    birth: Date,
    class: String,
    hometown: String
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("student", schema);
};
