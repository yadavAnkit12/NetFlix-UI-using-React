import { Col, Row,Carousel } from "react-bootstrap"

const SecondCom=()=>{



    return <div style={{backgroundColor:'black',marginTop:'-17px'}}>
    <Row>
        <Col sm='6'>
<center style={{marginBottom:'100px'}}>
    <h1 style={{marginTop:'100px', fontWeight: 'bold', fontSize:'500%',color:'white'}}>Enjoy on your TV.</h1>
    <h3
    style={{padding:'50px',fontWeight:'bold',color:'white'}}
    >
    Watch on smart TVs, PlayStation, Xbox, 
    Chromecast, Apple TV, Blu-ray players and 
    more.
    </h3>
</center>
        </Col>
        <Col sm='6'>
            <center>
        <Carousel style={{marginTop:'80px',width:'50%',marginBottom:'100px'}}>
    
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.5s07y6Hz9tstgXQTTz8V2wHaE8?pid=ImgDet&rs=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wednesday</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.BDq5HLC1Ijv8xGqk8ml2-wHaEK?pid=ImgDet&rs=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Khakee:The Bihar Chapter</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/best-movies-on-netflix-june-2021.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Watch more.</h3>
  
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    
    </center>
        </Col>
    </Row>
    
    </div>
}

export default SecondCom