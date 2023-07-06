import adminService from "../services/adminService";

export const login = async (req, res) => {
    const response = await adminService.login(req);
    return res.status(200).send(response);
};

