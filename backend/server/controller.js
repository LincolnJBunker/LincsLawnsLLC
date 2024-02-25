import { Customer } from '../database/model.js'

const handlerFunctions = {
    
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
                message: 'password does not math',
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

    addTestimonial: (req, res) => {
        const { testimonial } = req.body
        const newTestimonial = {

        }
    }
}

export default handlerFunctions