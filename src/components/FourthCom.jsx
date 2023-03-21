import { Row,Col } from "react-bootstrap"
const FourthCom=()=>{
    return <div style={{backgroundColor:'black',marginTop:'-17px'}}>
    <Row>
        <Col sm='6'>
<center style={{marginBottom:'100px'}}>
    <h1 style={{marginTop:'100px', fontWeight: 'bold', fontSize:'500%',color:'white'}}>Watch <br></br>everywhere.
    </h1>
    <h3
    style={{padding:'50px',fontWeight:'bold',color:'white'}}
    >
    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
    </h3>
</center>
        </Col>
        <Col sm='6'>
            <center>
            <iframe src="https://www.youtube.com/embed/ZwKhufmMxko" style={{marginTop:'130px',height:'150%'}}>
</iframe>
    </center>
        </Col>
    </Row>
    
    </div>
    
}
export default FourthCom