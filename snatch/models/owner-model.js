const mongoose = reqiure('mongoose');

const ownerSchema = mongoose.Schema({
   fullname: {
      type: String,
      minLength: 3,
      trim: true,
   },
   email: String,
   password: String,
   product:{
    type: Array,
    default: []
   },
  gstin: String,
   picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);