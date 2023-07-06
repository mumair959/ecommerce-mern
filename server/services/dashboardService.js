import Order from "../models/order";
import Product from "../models/product";

const getDashboardData = async (req) => {
  const orders = await Order.aggregate([{$match: {'orderBy': req.auth._id}}]).sortByCount("status");
    let response = {'dashboard' : {orders : orders}};
    return response;
};

export default {
  getDashboardData
};