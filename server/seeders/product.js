const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Ecommerce',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log('MONGODB CONNECTION OPEN'))
.catch((err) => console.log(err));

const seedProduct = [
    {
        name : 'Tomato',
        description : 'Red Tomato',
        price : 100,
        discount : 0,
        netPrice : 100,
        productType : 'Vegetables',
        productImage : 'assets/img/products/tomato-slice.png'
    },
    {
        name : 'Capsicum',
        description : 'Green Capsicum',
        price : 150,
        discount : 0,
        netPrice : 150,
        productType : 'Vegetables',
        productImage : 'assets/img/products/capsicum.png'
    },
    {
        name : 'Lemon',
        description : 'Yellow Lemon',
        price : 600,
        discount : 0,
        netPrice : 600,
        productType : 'Vegetables',
        productImage : 'assets/img/products/lemon.png'
    },
    {
        name : 'Apple',
        description : 'Red Apple',
        price : 200,
        discount : 0,
        netPrice : 200,
        productType : 'Fruits',
        productImage : 'assets/img/products/apple.png'
    },
    {
        name : 'Banana',
        description : 'Yellow Banana',
        price : 120,
        discount : 0,
        netPrice : 120,
        productType : 'Fruits',
        productImage : 'assets/img/products/banana.png'
    },
    {
        name : 'Lychee',
        description : 'Red Lychee',
        price : 120,
        discount : 0,
        netPrice : 120,
        productType : 'Fruits',
        productImage : 'assets/img/products/lychee.png'
    },
    {
        name : 'Beef',
        description : 'Fresh Beef',
        price : 750,
        discount : 0,
        netPrice : 750,
        productType : 'Meat',
        productImage : 'assets/img/products/beef.png'
    },
    {
        name : 'Mutton',
        description : 'Fresh Mutton',
        price : 1550,
        discount : 0,
        netPrice : 1550,
        productType : 'Meat',
        productImage : 'assets/img/products/mutton.png'
    },
    {
        name : 'Chicken',
        description : 'Fresh Chicken',
        price : 650,
        discount : 0,
        netPrice : 650,
        productType : 'Meat',
        productImage : 'assets/img/products/chicken.png'
    },
    {
        name : 'Eggs',
        description : 'Fresh Eggs',
        price : 250,
        discount : 0,
        netPrice : 250,
        productType : 'Dairy',
        productImage : 'assets/img/products/eggs.png'
    },
    {
        name : 'Rice',
        description : 'New Rice',
        price : 300,
        discount : 0,
        netPrice : 300,
        productType : 'Groceries',
        productImage : 'assets/img/products/rice.png'
    }
];

const seedDB = async() => {
    console.log('SEEDING...');
    await Product.deleteMany({});
    await Product.insertMany(seedProduct);
    console.log('DATA SEEDED');
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log('MONGODB CONNECTION CLOSED');
});
