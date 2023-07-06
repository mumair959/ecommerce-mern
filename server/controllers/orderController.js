import orderService from "../services/orderService"; 

const getAllOrders = async (req, res) => {
    const response = await orderService.getAllOrders();
    return res.status(200).send(response);
};

const getOrder = async (req, res) => {
    const response = await orderService.getOrder(req.params.id);
    return res.status(200).send(response);
};
  
export default {
    getAllOrders,
    getOrder
};