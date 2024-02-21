
function TestimonialForm() {
  return (
    <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            City of Service:
            <input type="text" name="city" />
        </label>
        <label>
            Testimonial
            <input type="text" name="testimonial" />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default TestimonialForm