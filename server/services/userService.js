import User from "../models/user";
import { hashPassword } from "../helpers/auth";
  
const getUserDetails = async (id) => {
  const user = await User.findById(id);
  let message = (user == null) ? "No Data Found" : "";
  let response = {'data' : user, 'message' : message};
  return response;
};

const updateUserDetails = async (body) => {
  let {id, firstname, lastname, email, phone, username} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  // Validations

  if(!firstname) {
      response.success = false;
      response.error['firstname'] = 'First name field is required';
  }
  if(!lastname) {
      response.success = false;
      response.error['lastname'] = 'Last name field is required';
  }
  if(!email) {
      response.success = false;
      response.error['email'] = 'Email field is required';
  }
  if(!phone) {
    response.success = false;
    response.error['phone'] = 'Phone field is required';
  }
  if(!username) {
    response.success = false;
    response.error['username'] = 'Username field is required';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  // UPDATE PROFILE DATA
  try {
    // UPDATING PROFILE DATA
    const user = await User.findByIdAndUpdate(id,{firstname, lastname, email, phone, username},{new : true});
    response.message = 'User profile updated successfully';
    response.data = user;
    return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

const updatePassword = async (body) => {
  let {id, email, password, newPassword, confirmNewPassword} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  // Validations
  if(!email) {
    response.success = false;
    response.error['email'] = 'Email field is required';
  }
  if(!password) {
      response.success = false;
      response.error['password'] = 'Password field is required';
  }
  if(!newPassword) {
      response.success = false;
      response.error['newPassword'] = 'New password field is required';
  }
  if(!confirmNewPassword) {
    response.success = false;
    response.error['confirmNewPassword'] = 'Confirm new password field is required';
  }
  if(newPassword != confirmNewPassword) {
    response.success = false;
    response.error['newPassword'] = 'Password doesnot matched';
  }

  const user_exist = await User.find({_id : id,email : email});

  if(user_exist = null) {
    response.success = false;
    response.error['email'] = 'User not exists';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  // UPDATE PROFILE DATA
  try {
    // UPDATING PROFILE DATA
    const hashedPassword = await hashPassword(password);
    const user = await User.findByIdAndUpdate(id,{password : hashedPassword},{new : true});
    response.message = 'Password updated successfully';
    response.data = user;
    return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

export default {
  getUserDetails,
  updateUserDetails,
  updatePassword
};