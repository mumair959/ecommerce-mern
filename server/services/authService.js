import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import  jwt  from "jsonwebtoken";

const register = async (req) => {
  const {firstname, lastname, email, password} = req.body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  // Validations
  const exists = await User.findOne({email});

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
  if(exists) {
      response.success = false;
      response.error['email'] = 'Email already exists';
  }
  if(!password || password.length < 6) {
      response.success = false;
      response.error['password'] = 'Password field is required and atleast 6 characters';
  }

  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  // HASH PASSWORD
  const hashedPassword = await hashPassword(password);

  // SAVING DATA
  const user = new User({firstname, lastname, email, password : hashedPassword});

  try {
      await user.save();
      response.message = 'User registered successfully';
      return response;
  } catch (err) {
      response.success = false;
      response.message = 'Oops! Something went wrong';
      return response;
  }
};

const login = async (req) => {
    let response = {success : true, message : '', error : {}};
  
    try {
        const {email, password} = req.body;

        //   VALIDATIONS
        if(!email) {
            response.success = false;
            response.error['email'] = 'Email field is required';
        }
        if(!password || password.length < 6) {
            response.success = false;
            response.error['password'] = 'Password field is required and atleast 6 characters';
        }
        if (response.success == false) {
            response.message = 'Invalid data given';
            return response;
        }

        const user = await User.findOne({email, userType : ['Vendor','Customer']});

        if (!user) {
        response.success = false;
        response.error['email'] = 'This credentials not exists in our record';
        }

        const match = await comparePassword(password, user.password);

        if (!match) {
        response.success = false;
        response.error['email'] = 'This credentials not exists in our record';
        }

        if (response.success == false) {
        response.message = 'Invalid data given';
        return response;
        }
    
        const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET, {
            'expiresIn' : '7d'
        });

        user.password = undefined;

        return {'token' : token, 'user' : user};
    } catch (err) {
        response.success = false;
        response.message = 'Oops! Something went wrong';
        return response;
    }
};

export default {
  register,
  login
};