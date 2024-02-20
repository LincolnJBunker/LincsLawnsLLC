import { User, Appointment, Service, db } from './model.js';

import lodash from 'lodash';

console.log('Syncing Database');

//create all tables associated wth the 'db' variable
await db.sync({
    force: true
});

console.log('Database tables created');
console.log('Inserting data...');

//create db entries

const josh = await User.create({
    firstName: 'Josh',
    lastName: 'Behunin',
    email: 'swaghomeslicejb@gmail.com',
    password: 'mrcoolguy',
    address: '1234 Circle Circle'
});

const aeration = await Service.create({
    serviceName: 'Aeration',
    description: 'helping ones lawn breath after harsh winter month',
    price: '$50'
});

const lawnMowing = await Service.create({
    serviceName: 'Lawn Mowing',
    description: 'mowing, edging, and weedwacking your yard',
    price: '$30'
});

const powerwashing = await Service.create({
    serviceName: 'Powerwashing',
    description: 'Cleaning your driveway or patio with a powerwasher',
    price: '$60'
});

const grillCleaning = await Service.create({
    serviceName: 'Grill Cleaning',
    description: 'Deep cleaning your barbeque or smoker',
    price: '$50'
});


console.log('Database seeded!')

await db.close();