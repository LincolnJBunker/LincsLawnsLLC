import { DataTypes, Model } from 'sequelize';
import util from 'util';
import url from 'url';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///lincllc')

class Customer extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Customer.init(
    {
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'customers',
        sequelize: db,
    }
)

class Service extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Service.init(
    {
        servicesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false  
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        modelName: 'services',
        sequelize: db,
    }
)

class Appointment extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Appointment.init(
    {
        appointmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // userId: {
            
        // },
        // serviceId: {

        // },
        appointmentDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        appointmentTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        modelName: 'appointment',
        sequelize: db,
    }
)

//Define Relationships
//a user can have many appointments but an appointment can only be tied to one user --> one to many
Customer.hasMany(Appointment, { foreignKey: 'userId' });
Appointment.belongsTo(Customer, { foreignKey: 'userId' });

//an appointment be tied to many services and a service can have many appointments --> many to may
Appointment.belongsToMany(Service, { through: 'AppointmentService' });
Service.belongsToMany(Appointment, { through: 'AppointmentService' });


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

await db.close()

export { Customer, Service, Appointment };