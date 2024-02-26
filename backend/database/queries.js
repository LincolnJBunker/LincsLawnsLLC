const { User, Testimonial } = await import('./model.js');

const allTestimonials = await Testimonial.findAll()

console.log(allTestimonials);