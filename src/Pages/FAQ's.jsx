import { useNavigate } from "react-router-dom"

function FAQs() {
  const navigate = useNavigate();
  return (
    <>
      <h1>FAQ's</h1>

      <h3>Question</h3>
      <p>Answer</p>
      
      <h3>Question</h3>
      <p>Answer</p>
      
      <h3>Question</h3>
      <p>Answer</p>
      
      <h3>Question</h3>
      <p>Answer</p>
      
      <h3>Question</h3>
      <p>Answer</p>
      
      <h3>Question</h3>
      <p>Answer</p>
      
      <h3>Question</h3>
      <p>Answer</p>

      <p>Have another question? Click here to write a message</p>
      <button onClick={() => navigate(`/contact`)}>Send Message</button>

    </>
  )
}

export default FAQs