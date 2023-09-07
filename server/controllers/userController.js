import userService from "../services/userService"; 

const getUserDetails = async (req, res) => {
    const response = await userService.getUserDetails(req.auth._id);
    return res.status(200).send(response);
};

const updateUserDetails = async (req, res) => {
    const response = await userService.updateUserDetails(req.body);
    return res.status(200).send(response);
};
  
export default {
    getUserDetails,
    updateUserDetails
};