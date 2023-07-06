import Order from "../models/order";

const getAllOrders = async () => {
    const orders = await Order.find({});
    let message = (orders.length == 0) ? "No Data Found" : "";
    let response = {'data' : orders, 'message' : message};
    return response;
};
  
const getOrder = async (id) => {
  const order = await Order.findById(id);
  let message = (order == null) ? "No Data Found" : "";
  let response = {'data' : order, 'message' : message};
  return response;
};

export default {
  getAllOrders,
  getOrder
};