import User from "../models/user";
import { comparePassword } from "../helpers/auth";
import  jwt  from "jsonwebtoken";

const login = async (req) => {
  let response = {success : true, message : '', error : {}};

  try {
    const {email, password} = req.body;
    const user = await User.findOne({email, userType : 'SuperAdmin'});

    if (!user) {
      response.success = false;
      response.error['auth'] = 'This credentials not exists in our record';
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      response.success = false;
      response.error['auth'] = 'This credentials not exists in our record';
    }

    if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
    }

    const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET, {
        'expiresIn' : '7d'
    });

    user.password = undefined;
    user.secret = undefined;

    return {'token' : token, 'user' : user};
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

export default {
  login
};