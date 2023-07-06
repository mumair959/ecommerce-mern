import Message from "../models/message";

const getAllMessages = async () => {
    const messages = await Message.find({});
    let response = {'data' : messages};
    return response;
};
  
const getMessage = async (id) => {
  const message = await Message.findById(id);
  let response = {'data' : message};
  return response;
};

const createMessage = async (body) => {
  let {firstname, lastname, email, phone, content} = body;

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
  if(!content) {
    response.success = false;
    response.error['message'] = 'Message field is required';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  // SAVING MESSAGE DATA
  const message = new Message({firstname, lastname, email, phone, content});

  try {
    await message.save();
    response.message = 'Message has been sent successfully';
    response.data = message;
    return response;
  } catch (err) {
    console.log(err);
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

const deleteMessage = async (id) => {
  // Response Format
  let response = {success : true, message : '', error : {}};

  // VALIDATIONS
  if(!id) {
    response.success = false;
    response.error['id'] = 'Id field is required';
  }

  try {
      await Message.findByIdAndDelete(id);
      response.message = 'Message deleted successfully';
      return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

export default {
  getAllMessages,
  getMessage,
  createMessage,
  deleteMessage,
};