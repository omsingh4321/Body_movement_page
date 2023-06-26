import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100" height='300vh'
          src="https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=885&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
         
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100" height='300vh'
          src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100" height='300vh'
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;