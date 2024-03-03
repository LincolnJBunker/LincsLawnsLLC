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
        id: {
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
        },
        phoneNumber: {
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
        id: {
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
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        hour: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'appointment',
        sequelize: db,
    }
)

class Testimonial extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Testimonial.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        testimonialName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        testimonialCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        testimonialDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        modelName: 'testimonial',
        sequelize: db,
    }
)

class Admin extends Model {
    [util.inspect.custom](){
        return this.toJSON
    }
}

Admin.init(
    {
        adminId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        adminName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        adminPassword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'admin',
        sequelize: db,
    }
)

//Define Relationships
//a user can have many appointments but an appointment can only be tied to one user --> one to many
Customer.hasMany(Appointment, { as: 'appointments' });
Appointment.belongsTo(Customer, { foreignKey: 'customerId' });

//an appointment be tied to many services and a service can have many appointments --> many to may
Appointment.belongsToMany(Service, { through: 'AppointmentService' });
Service.belongsToMany(Appointment, { through: 'AppointmentService' });

// Testimonial.hasMany(Service, { foreignKey: 'servicesId' })
// Service.belongsTo(Testimonial, { foreignKey: 'servicesId' })


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

// await db.close()

export { Customer, Service, Appointment, Testimonial, Admin };