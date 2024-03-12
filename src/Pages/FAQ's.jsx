import { useNavigate, NavLink } from "react-router-dom";
import { Button, Accordion } from "react-bootstrap";

function FAQs() {
  const navigate = useNavigate();
  return (
    <>
    <h1 className="faq-header">Frequently Asked Questions</h1>
    
    <h2 className="faq">General Questions</h2>
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ color: 'black'}}>What services do you offer?</Accordion.Header>
        <Accordion.Body>
          We spealize in lawncare with an emphasis in aerating lawns, pressure washing driveways, sidewalks, and patio surfaces,
          and clean grills and barbeques. To see more information about our services, <NavLink to='/services'>click here</NavLink>.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What areas do you serve</Accordion.Header>
        <Accordion.Body>
          We serve everywhere within Salt Lake County and Utah County. We also offer our services in Park City, and Moab.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I request a service?</Accordion.Header>
        <Accordion.Body>
          Requesting a service is simple! <NavLink to='/schedule/appointment'>Click here</NavLink> to schedule an appointment, where you'll 
          be asked which date and time best fit into your schedule, and your contact information so we can contact you with exact
          updates for when we will be there!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are your payment options</Accordion.Header>
        <Accordion.Body>
          We accept cash, check, and venmo as forms of payment.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Do you offer free estimates or quotes?</Accordion.Header>
        <Accordion.Body>
          Absolutely! For whichever service you are thinking about, we offer free estimates. To request an estimate, <NavLink to='/contact'>click here</NavLink>.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Can I combine multiple services in one appointment?</Accordion.Header>
        <Accordion.Body>
          Yes! Request your service as follows on the <NavLink to='/schedule/appointment'>schedule page</NavLink>, and once we contact you let us know what other service you would like.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <h2 className="faq">Lawn Care</h2>
    <Accordion>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What does lawn aeration involve?</Accordion.Header>
        <Accordion.Body>
          Lawn aeration is a process that perforates the soil with small holes, allowing air, water, and nutrients to reach the grassroots more effectively.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="8">
        <Accordion.Header>What are the advantages of reducing soil compaction?</Accordion.Header>
        <Accordion.Body>
        Reducing soil compaction facilitates healthier root systems, making your lawn more resistant to stressors like drought and promoting a lusher, more vibrant appearance.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="9">
        <Accordion.Header>How does aeration contribute to root growth?</Accordion.Header>
        <Accordion.Body>
        Aeration encourages the development of deeper and more extensive root systems, resulting in a stronger and more resilient lawn.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="10">
        <Accordion.Header>How often should I aerate my lawn?</Accordion.Header>
        <Accordion.Body>
          In Utah, it is recommended to aerate your lawn twice a year, in the early spring and early fall. Late March to early April 
          and late September are great times to aerate your lawn.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="11">
        <Accordion.Header>How does lawn aeration contribute to a thicker, lush lawn?</Accordion.Header>
        <Accordion.Body>
        The combined benefits of aeration contribute to thicker and more lush grass growth, enhancing the overall aesthetic appeal of your lawn.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <p>Interested in aeration? Check out details of this service <NavLink to='/services/lawncare'>here</NavLink>.</p>

    <h2 className="faq">Power Washing</h2>
    <Accordion>
      <Accordion.Item eventKey="12">
        <Accordion.Header>Is power washing bad for my driveway?</Accordion.Header>
        <Accordion.Body>
        Nope! We use the appropriate pressure and techniques to ensure no damage occurs to your surfaces. We assess the material and current conditon of the surface before starting
        the power washing process
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="13">
        <Accordion.Header>Can you remove oil stains from my driveway?</Accordion.Header>
        <Accordion.Body>
        Yes, our power washing service is designed to tackle various stains, including oil. However, the effectiveness may depend on the age and severity of the stain.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="14">
        <Accordion.Header>How can I maintain the cleanliness of my driveway and patio after power washing?</Accordion.Header>
        <Accordion.Body>
        Regular maintenance involves sweeping debris, removing spills promptly, and addressing stains early. We can provide tips on post-power washing care during our service.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <p>Interested in power washing? Check out details of this service <NavLink to='/services/powerwashing'>here</NavLink>.</p>


    <h2 className="faq">Grill Cleaning</h2>
    <Accordion>
      <Accordion.Item eventKey="15">
        <Accordion.Header>What does grill cleaning invovle?</Accordion.Header>
        <Accordion.Body>
        When we clean your grill, we deep clean the exterior and interior using certified cleaning materials.
        We clean each individual grate, burner, heat plate, and grease tray. We clean the body of the grill, each nob, temperature gauge, to help your
        grill look as good as new!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="16">
        <Accordion.Header>What are the benefits of cleaning my grill?</Accordion.Header>
        <Accordion.Body>
          Regulary cleaning your grill has many benefits. It will extend the life of your grill and each of its individual parts. It can improve the taste and quality of food,
          and eliminate past grease and burnt-on food from previous grilling sessions. Leaving a build up of this overtime is unsafe due to an increase of germs.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="17">
        <Accordion.Header>How often should I clean my grill?</Accordion.Header>
        <Accordion.Body>
        The combined benefits of aeration contribute to thicker and more lush grass growth, enhancing the overall aesthetic appeal of your lawn.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item eventKey="18">
        <Accordion.Header>Do you clean smokers?</Accordion.Header>
        <Accordion.Body>
        Yes! We clean smokers, or any type of grill!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <p>Interested in grill cleaning? Check out details of this service <NavLink to='/services/grillcleaning'>here</NavLink>.</p>


      <p>Have another question? Send us a message!</p>
      <Button className="button" onClick={() => navigate(`/contact`)}>Send Message</Button>

    </>
  )
}

export default FAQs