
const { Customer, Appointment, Testimonial } = await import('./model.js');

// const allAppsCustomers = await Appointment.findAll({
//     include: [{
//         model: Customer,
//         required: true
//     }]
// })
// console.log(allAppsCustomers)

const allAppointments = await Customer.findAll({
    where:{
        id:2
    },
    include: {
        model: Appointment,
        as: 'appointments'
    }
})

console.log(JSON.stringify(allAppointments))

// const appointments = await Appointment.findAll()
// console.log(JSON.stringify(appointments))