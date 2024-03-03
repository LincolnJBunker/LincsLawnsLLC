const { Customer, Appointment, Testimonial } = await import('./model.js');

const allAppsCustomers = Appointment.findAll({
    include: [{
        model: Customer,
        required: true
    }]
})
console.log(allAppsCustomers)