import EmailSubscribe from "../models/emailSubscribe";

const subscribe = async (body) => {
  let {email} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  // Validations
  if(!email) {
      response.success = false;
      response.message = 'Email field is required';
  }

  const exists = await EmailSubscribe.findOne({email});

  if(exists) {
    response.success = false;
    response.message = 'Email already exists';
  }
  
  if (response.success == false) {
    return response;
  }

  // SAVING SUBSCRIPTION DATA
  const subscription = new EmailSubscribe({email});

  try {
    await subscription.save();
    response.message = 'Subscription has been done successfully';
    return response;
  } catch (err) {
    console.log(err);
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

export default {
  subscribe
};