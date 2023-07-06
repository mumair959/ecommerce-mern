import dashboardService from "../services/dashboardService"; 

const getDashboardData = async (req, res) => {
    const response = await dashboardService.getDashboardData(req);
    return res.status(200).send(response);
};


export default {
    getDashboardData
};