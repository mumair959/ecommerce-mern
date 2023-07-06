import Invoice from "../models/invoice";

const getAllInvoices = async () => {
    const invoices = await Invoice.find({});
    let message = (invoices.length == 0) ? "No Data Found" : "";
    let response = {'data' : invoices, 'message' : message};
    return response;
};
  
const getInvoice = async (id) => {
  const invoice = await Invoice.findById(id);
  let message = (invoice == null) ? "No Data Found" : "";
  let response = {'data' : invoice, 'message' : message};
  return response;
};

export default {
  getAllInvoices,
  getInvoice
};