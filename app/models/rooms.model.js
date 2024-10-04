module.exports = mongoose => {
  const schema = mongoose.Schema({
    number: String,
    type: String,
    price_per_person: Number,
    number_of_persons: Number
  }, {timestamps: true});

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("room", schema);
};
