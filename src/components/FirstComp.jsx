
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button} from "react-bootstrap"
const FirstCom=()=>{
  
  const myStyle={
    backgroundImage:"url('https://assets.nflxext.com/ffe/siteui/vlv3/61e79073-50cf-4f7b-9a23-73290e6f7dca/d0322828-6d63-4f5f-92fb-30f492e7cca4/IN-en-20230410-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
    height:'100vh',
    
    marginTop:'-10px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  
    
    
};
    return<>
    <div style={myStyle}> 
    
        <h1 style={{color:'red',marginLeft:'150px',marginTop:'10px',fontWeight: 'bold',fontStyle:'oblique'}} >NETFLIX 
     <select className="btn" style={{backgroundColor:'black',color:'white',marginLeft:'1060px',marginTop:'5px'}}><option>English</option><option>Hindi</option></select>
        <Button variant="danger" style={{float:'right',marginRight:'150px',marginTop:'14px'}}>signIn</Button></h1>
  
    <center>
            <h1 style={{marginTop:'300px', fontWeight: 'bold', fontSize:'400%',color:'white'}}>Unlimited movies,Tv Shows & more.</h1>
            <h3 style={{color:'white'}}>Watch anywhere,Cancel anytime</h3>
            <br></br>
            <h2 style={{color:'white'}}>Ready to watch? Enter your email to create or restart your membership.</h2>
          <input placeholder="Email address" style={{height:'50px',marginTop:'10px',width:'30%',backgroundColor:'black',color:'white'}}></input>  <Button className="btn-lg btn-danger">Get Started</Button>
          
                  </center>
    
                  <FontAwesomeIcon icon="globe" />
        </div>
    
    </>
}
export default FirstCom