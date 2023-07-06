const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Ecommerce',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log('MONGODB CONNECTION OPEN'))
.catch((err) => console.log(err));

const seedUser = [
    {
        firstname : 'Admin',
        lastname : 'One',
        email : 'admin.one@grostore.com',
        password : '$2a$12$ojCGpJ0pDunbx.pDLBl61ulr2ovEaS2ofmcGhoD3XTYJcB3XMhoh.', //Password: test123
        userType : 'SuperAdmin',
        status : 'Active'
    }
];

const seedDB = async() => {
    console.log('SEEDING...');
    await User.deleteMany({});
    await User.insertMany(seedUser);
    console.log('DATA SEEDED');
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log('MONGODB CONNECTION CLOSED');
});
