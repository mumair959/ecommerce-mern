import User from "../models/user";
  
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

export default {
  getUserDetails,
  updateUserDetails
};