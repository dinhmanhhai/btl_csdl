module.exports = mongoose => {
  const schema = mongoose.Schema({
    _id: String, name: String, code: String, price: Number
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("service", schema);
};
