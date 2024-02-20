import { DataTypes, Model } from 'sequelize';
import util from 'util';
import url from 'url';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///lincllc')

export class User extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allownull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'users',
        sequelize: db,
    }
)

export class Service extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Service.init(
    {
        servicesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
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

export class Appointment extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Appointment.init(
    {
        appointmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            
        },
        serviceId: {

        },
        appointmentDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        appointmentTime: {

        }
    },
    {
        modelName: 'appointment',
        sequelize: db,
    }
)

//Define Relationships
User.hasMany(Appointment, { foreignKey: 'userId' });
Appointment.belongsTo(User, { foreignKey: 'userId' });

Appointment.belongsToMany(Service, { through: 'AppointmentService' });
Service.belongsToMany(Appointment, { through: 'AppointmentService' });


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

export { User, Service, Appointment };