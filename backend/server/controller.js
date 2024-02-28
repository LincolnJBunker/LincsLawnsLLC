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
        const { date, time, customerId, serviceId } = req.body
        console.log(req.body)
        const newAppointment = await Appointment.create({
            date: date,
            time: time,
            userId: customerId
        })

        if(serviceId) {
            const service = await Service.findByPk(serviceId);

            if (service) {
                await newAppointment.addService(service)
            } else {
                console.log('service not found')
            }
        }
    },
}




export default handlerFunctions