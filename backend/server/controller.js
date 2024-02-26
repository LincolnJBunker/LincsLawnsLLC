import { Customer, Testimonial, Service } from '../database/model.js'

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


    addTestimonial: (req, res) => {
        const { testimonial } = req.body
        const newTestimonial = {
            testimonialName: '',
            testimonialCity: '',
            testimonialDescription: ''
        }

        res.send({
            message: "New testimonial added!",
            newTestimonial: newTestimonial
        })
    },

    
    getTestimonials: async (req, res) => {
        const allTestimonials = await Testimonial.findAll()
        res.send(allTestimonials);
    },

    
    getServices: async (req, res) => {
        const allServices = await Service.findAll()
        res.send(allServices)
    },

    
}

export default handlerFunctions