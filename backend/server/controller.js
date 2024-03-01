import { Customer, Testimonial, Service, Appointment, Admin } from '../database/model.js'

//need to import testimonial data from db
//need to push new testimonial to existing data from db
//

const handlerFunctions = {
    sessionCheck: async (req, res) => {
        if (req.session.adminId) {
            res.send({
                message: 'admin is still logged in',
                success: true,
                adminId: req.session.adminId
            })
            return
        } else {
            res.send({
                message: 'no admin logged in',
                success: false
            })
            return
        }
    },
    
    login: async (req, res) => {
        const { adminName, adminPassword } = req.body
        console.log(req.body)

        const admin = await Admin.findOne({
            where: {
                adminName: adminName
            }
        })
        if(!admin){
            res.send({
                message: 'no admin found',
                success: false
            })
            return
        }
        // if we're here, then the user was found
        if(admin.adminPassword !== adminPassword) {
            res.send({
                message: 'adminPassword does not math',
                success: false
            })
            return
        }
        req.session.adminId = admin.adminId

        res.send({
            message: 'admin logged in',
            success: true,
            adminId: req.session.adminId
        })
    },

    logout: async(req, res) => {
        req.session.destroy()

        res.send({
            message: 'admin logged out',
            success: true
        })
        return
    },


    addTestimonial: async (req, res) => {
        const { testimonialName, testimonialCity, testimonialDescription } = req.body
        console.log(req.body)
        const newTestimonial = await Testimonial.create({
            testimonialName: testimonialName,
            testimonialCity: testimonialCity,
            testimonialDescription: testimonialDescription
        })

        const allTestimonials = await Testimonial.findAll()
        res.send(allTestimonials);
    },

    
    getTestimonials: async (req, res) => {
        const allTestimonials = await Testimonial.findAll()
        res.send(allTestimonials);
    },

    
    getServices: async (req, res) => {
        const allServices = await Service.findAll()
        res.send(allServices)
    },


    getAppointments: async (req, res) => {
        console.log('alfjfasdlfkjdsa')
        const allAppointments = await Appointment.findAll()
        res.send(allAppointments)
    },

    newAppointment: async (req, res) => {
        const {date, hour, service, firstName, lastName, email, address, phoneNumber} = req.body
        console.log(req.body)
        const newCustomer = await Customer.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            phoneNumber: phoneNumber
        });
        const newAppointment = await Appointment.create({
            date: date,
            hour: hour,
            service: service,
            customerId: newCustomer.customerId
        });

        await newAppointment.setCustomer(newCustomer)

        const allAppointments = await Appointment.findAll({
            include: [{ model: Customer }]
        })
        res.send(allAppointments)
        // res.send(allCustomers)
    },

    getCustomers: async (req, res) => {
        const allCustomers = await Customer.findAll()
        res.send(allCustomers);
    },

    getCustomersAppointments: async (req, res) => {
        try{
            const allAppointments = await Appointment.findAll({
                include: {
                    model: Customer,
                    as: 'appointments'
                }
            })
            res.send(allAppointments)
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error')
        }
    }
}




export default handlerFunctions