import me_img from '../assets/me.jpg'
import me2_img from '../assets/me2.jpg'
import hikingMe_img from '../assets/hikingme.jpg'
import kylie_img from '../assets/kylie.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Me() {
  return (
    <>
    <div className="me-container">
    <div className="me-carousel">
        <Carousel controls indicators>
        <Carousel.Item>
            <img className="d-block w-100" src={me_img} alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={kylie_img} alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={me2_img} alt="slide 3" />
        </Carousel.Item>
        </Carousel>
    </div>
        <div className="text-container">
            <p>My name is Lincoln Bunker. I am from Cottonwood Heights, Utah, and have been over 5 years of experience in professional lawn care, powerwashing, and grill cleaning. I am currently studying computer science and love to program.
                I love helping others, and do my best to provide my services to your exact needs. In my free time I love to ski, hike, rock climb, and run. My Fianceé Kylie and I are getting married in July, and plan to 
                continue our studies at UVU.
            </p>
        </div>
    </div>
    
    </>
    
      )
    }
    
    export default Me