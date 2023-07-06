import invoiceService from "../services/invoiceService"; 

const getAllInvoices = async (req, res) => {
    const response = await invoiceService.getAllInvoices();
    return res.status(200).send(response);
};

const getInvoice = async (req, res) => {
    const response = await invoiceService.getInvoice(req.params.id);
    return res.status(200).send(response);
};
  
export default {
    getAllInvoices,
    getInvoice
};