import { User, Appointment, Service, db } from '../backend/database/model.js';

import lodash from 'lodash';

await db.sync({
    force: true
})

await db.close();

// console.log('Syncing the DataBase...');
// await db.sync({ force: true });

// console.log('Seeding database...');

// const usersInDB = await Promise.all(userData.map(async(movie) => {
    
// }))