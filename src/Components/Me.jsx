import me_img from '../assets/me.jpg'
import menkylie_img from '../assets/me-n-kylie.jpg'
import hikingMe_img from '../assets/hikingme.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Me() {
  return (
    <>
    <p>My name is Lincoln Bunker. I am from Cottonwood Heights, Utah, and have been over 5 years of experience in professional lawn care, powerwashing, and grill cleaning. I am currently studying computer science and love to program.
        I love helping others, and do my best to provide my services to your exact needs. In my free time I love to ski, hike, rock climb, and run. My Fianceé Kylie and I are getting married in July, and plan to 
        continue our studies at UVU.
    </p>
        <Carousel controls indicators>
        <Carousel.Item>
            <img className="d-block w-100" src={me_img} alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={menkylie_img} alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={hikingMe_img} alt="slide 3" />
        </Carousel.Item>
        </Carousel>
    
    </>
    
      )
    }
    
    export default Me