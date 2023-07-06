import authService from "../services/authService"; 

export const register = async (req, res) => {
    const response = await authService.register(req);
    return res.status(200).send(response);
};

export const login = async (req, res) => {
    const response = await authService.login(req);
    return res.status(200).send(response);
};

export default {
    register,
    login
};

