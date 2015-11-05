import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
});

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hashSync(password, 8);
}

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(this.password, password);
}

export default mongoose.model('User', userSchema);