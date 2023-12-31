import Product from "../models/product";

const getAllProducts = async () => {
    const products = await Product.find({});
    const categories = await Product.aggregate().sortByCount("productType");
    let response = {products,categories};
    return response;
};
  
const getProduct = async (id) => {
  const product = await Product.findById(id);
  let response = product;
  return response;
};

const getProductByCategory = async (category) => {
  const products = await Product.find({productType : category});
  let response = products;
  return response;
};

const getTopProductByCategory = async (category) => {
  let products = [];
  if (category == 'All') {
    products = await Product.find({}).limit(3);
  } else {
    products = await Product.find({productType : category}).limit(3);
  }
  
  let response = products;
  return response;
};

const getProductCountByCategory = async (category) => {
  const products = await Product.aggregate().sortByCount("productType");
  let categories = {};
  products.forEach(elem => {
    categories[elem._id] = elem.count;
  });
  let response = categories;
  return response;
};

const createProduct = async (body) => {
  let {name, description, price, discount, netPrice, productType} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  // Validations
  const exists = await Product.findOne({name});

  if(!name) {
      response.success = false;
      response.error['name'] = 'Name field is required';
  }
  if(!description) {
      response.success = false;
      response.error['description'] = 'Description field is required';
  }
  if(!price) {
      response.success = false;
      response.error['price'] = 'Price field is required';
  }
  if(!discount) {
    response.success = false;
    response.error['discount'] = 'Discount field is required';
  }
  if(!netPrice) {
    response.success = false;
    response.error['netPrice'] = 'Net Price field is required';
  }
  if(!productType) {
    response.success = false;
    response.error['productType'] = 'Product type field is required';
  }
  if(exists) {
      response.success = false;
      response.error['name'] = 'Name already exists';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  // SAVING PRODUCT DATA
  const product = new Product({name, description, price, discount, netPrice, productType});

  try {
    await product.save();
    response.message = 'Product created successfully';
    response.data = product;
    return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

const updateProduct = async (body) => {
  let {_id, name, description, price, discount, netPrice, productType} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  // Validations
  const exists = await Product.findOne({name});

  if(!_id) {
    response.success = false;
    response.error['id'] = 'Id field is required';
  }
  if(!name) {
      response.success = false;
      response.error['name'] = 'Name field is required';
  }
  if(!description) {
      response.success = false;
      response.error['description'] = 'Description field is required';
  }
  if(!price) {
      response.success = false;
      response.error['price'] = 'Price field is required';
  }
  if(!discount) {
    response.success = false;
    response.error['discount'] = 'Discount field is required';
  }
  if(!netPrice) {
    response.success = false;
    response.error['netPrice'] = 'Net Price field is required';
  }
  if(!productType) {
    response.success = false;
    response.error['productType'] = 'Product type field is required';
  }
  if(exists) {
      response.success = false;
      response.error['name'] = 'Name already exists';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  try {
    // UPDATING PRODUCT DATA
    const product = await Product.findByIdAndUpdate(_id,{name, description, price, discount, netPrice, productType},{new : true});
    response.message = 'Product updated successfully';
    response.data = product;
    return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

const activateProduct = async (body) => {
  let {_id} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  if(!_id) {
    response.success = false;
    response.error['id'] = 'Id field is required';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  try {
    // UPDATING PRODUCT STATUS DATA
    const product = await Product.findByIdAndUpdate(_id,{status : 'Active'},{new : true});
    response.message = 'Product status updated successfully';
    response.data = product;
    return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

const deactivateProduct = async (body) => {
  let {_id} = body;

  // Response Format
  let response = {success : true, message : '', error : {}};

  if(!_id) {
    response.success = false;
    response.error['id'] = 'Id field is required';
  }
  
  if (response.success == false) {
      response.message = 'Invalid data given';
      return response;
  }

  try {
    // UPDATING PRODUCT STATUS DATA
    const product = await Product.findByIdAndUpdate(_id,{status : 'Inactive'},{new : true});
    response.message = 'Product status updated successfully';
    response.data = product;
    return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
};

const deleteProduct = async (id) => {
  // Response Format
  let response = {success : true, message : '', error : {}};

  // VALIDATIONS
  if(!id) {
    response.success = false;
    response.error['id'] = 'Id field is required';
  }

  try {
      await Product.findByIdAndDelete(id);
      response.message = 'Product deleted successfully';
      return response;
  } catch (err) {
    response.success = false;
    response.message = 'Oops! Something went wrong';
    return response;
  }
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