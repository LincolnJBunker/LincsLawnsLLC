import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///users')

export class Users extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Users.init(
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

export class Services extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Services.init(
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

export class Appointments extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Appointments.init(
    {
        appointmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            
        }
    }
)


export default db;