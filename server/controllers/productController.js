import productService from "../services/productService"; 

const getAllProducts = async (req, res) => {
    const response = await productService.getAllProducts();
    return res.status(200).send(response);
};

const getProduct = async (req, res) => {
    const response = await productService.getProduct(req.params.id);
    return res.status(200).send(response);
};

const getProductCountByCategory = async (req, res) => {
    const response = await productService.getProductCountByCategory();
    return res.status(200).send(response);
};

const getProductByCategory = async (req, res) => {
    const response = await productService.getProductByCategory(req.params.category);
    return res.status(200).send(response);
};

const getTopProductByCategory = async (req, res) => {
    const response = await productService.getTopProductByCategory(req.params.category);
    return res.status(200).send(response);
};

const createProduct = async (req, res) => {
    const response = await productService.createProduct(req.body);
    return res.status(200).send(response);
};

const updateProduct = async (req, res) => {
    const response = await productService.updateProduct(req.body);
    return res.status(200).send(response);
};

const activateProduct = async (req, res) => {
    const response = await productService.activateProduct(req.body);
    return res.status(200).send(response);
};

const deactivateProduct = async (req, res) => {
    const response = await productService.deactivateProduct(req.body);
    return res.status(200).send(response);
};

const deleteProduct = async (req, res) => {
    const response = await productService.deleteProduct(req.params.id);
    return res.status(200).send(response);
};
  
export default {
    getAllProducts,
    getProduct,
    getProductByCategory,
    getProductCountByCategory,
    getTopProductByCategory,
    createProduct,
    updateProduct,
    activateProduct,
    deactivateProduct,
    deleteProduct,
};