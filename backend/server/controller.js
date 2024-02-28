import { Customer, Testimonial, Service, Appointment } from '../database/model.js'

//need to import testimonial data from db
//need to push new testimonial to existing data from db
//

const handlerFunctions = {
    sessionCheck: async (req, res) => {
        if (req.session.customerId) {
            res.send({
                message: 'user is still logged in',
                success: true,
                customerId: req.session.customerId
            })
            return
        } else {
            res.send({
                message: 'no user logged in',
                success: false
            })
            false
        }
    },
    
    login: async (req, res) => {
        const { firstName, email } = req.body

        const customer = await Customer.findOne({
            where: {
                firstName: firstName
            }
        })
        if(!firstName){
            res.send({
                message: 'no firstName found',
                success: false
            })
            return
        }
        // if we're here, then the user was found
        if(customer.email !== email) {
            res.send({
                message: 'email does not math',
                success: false
            })
            return
        }
        req.session.customerId = customer.customerId

        res.send({
            message: 'user logged in',
            success: true,
            customerId: req.session.customerId
        })
    },

    logout: async(req, res) => {
        req.session.destroy()

        res.send({
            message: 'user logged out',
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
        })
        const newAppointment = await Appointment.create({
            date: date,
            hour: hour,
            service: service,
            customerId: newCustomer.customerId
        })
        const allAppointments = await Appointment.findAll()
        const allCustomers = await Customer.findAll()
        res.send(allAppointments)
        // res.send(allCustomers)
    },
}




export default handlerFunctions