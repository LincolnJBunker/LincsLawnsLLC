import { Customer, Testimonial, Service, db } from './model.js';
import serviceData from './services.json' assert { type: 'json' };
import lodash from 'lodash';
import connectToDB from './db.js';

console.log('Syncing Database');

//create all tables associated wth the 'db' variable
await db.sync({
    force: true
});

// const servicesInDB = await Promise.all(serviceData.map(async (service) => {
//     //destructure the service object
//     const { serviceName, description, price } = service;

//     const newService = Service.create({
//         serviceName,
//         description,
//         price
//     });
//     return newService
// }),
// );
// console.log(servicesInDB)

console.log('Database tables created');
console.log('Inserting data...');

//create db entries
// const db = await connectToDB('postgresql:///lincllc')

const josh = await Customer.create({
    firstName: 'Josh',
    lastName: 'Behunin',
    email: 'swaghomeslicejb@gmail.com',
    password: 'mrcoolguy',
    address: '1234 Circle Circle'
});

const aeration = await Service.create({
    serviceName: 'Aeration',
    description: 'Helping ones lawn breath after harsh winter months',
    price: '50'
});

const lawnMowing = await Service.create({
    serviceName: 'Lawn Mowing',
    description: 'mowing, edging, and weedwacking your yard',
    price: '30'
});

const powerwashing = await Service.create({
    serviceName: 'Powerwashing',
    description: 'Cleaning your driveway or patio with a powerwasher',
    price: '60'
});

const grillCleaning = await Service.create({
    serviceName: 'Grill Cleaning',
    description: 'Deep cleaning your barbeque or smoker',
    price: '50'
});

const testimonial1 = await Testimonial.create({
    testimonialName: 'Susie Austin',
    testimonialCity: 'Sandy',
    testimonialDescription: `We were super pleased with Lincoln's service. He aerated our lawn and it looks great!`
});

const testimonial2 = await Testimonial.create({
    testimonialName: 'Larry Bunker',
    testimonialCity: 'Millcreek',
    testimonialDescription: 'We requested Lincoln to clean our BBQ, and it looks as good as new!'
});

const testimonial3 = await Testimonial.create({
    testimonialName: 'Jonah Rogers',
    testimonialCity: 'Provo',
    testimonialDescription: 'For years my driveway was dirty, the powerwashing service was amazing!'
});

console.log(testimonial1)
console.log(testimonial2)
console.log(testimonial3)

console.log('Database seeded!')

await db.close();