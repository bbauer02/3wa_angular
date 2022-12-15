import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserShema = new Schema({
  email: {
    type : String,
    required: true,
  },
  password: {
    type : String,
    required: true,
  },
  token:{
    type: String
  }
});

const UserModel = model('users', UserShema);

export default UserModel;
