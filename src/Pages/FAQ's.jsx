import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <Button className="button" onClick={() => navigate(`/contact`)}>Send Message</Button>

    </>
  )
}

export default FAQs