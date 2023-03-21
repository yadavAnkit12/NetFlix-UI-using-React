import { Accordion, Button } from "react-bootstrap"

const SixthCom=()=>{
    return <div style={{backgroundColor:'black',marginTop:'-17px'}}>
<center>
    <h1 style={{ fontWeight: 'bold', fontSize:'400%',color:'white'}}>Frequently Asked Questions</h1>
    <Accordion style={{marginLeft:'200px',marginRight:'200px'}}>
      <Accordion.Item eventKey="1" style={{backgroundColor:'gray',fontWeight:'bold'}}>
       <Accordion.Header >What is Netflix ?</Accordion.Header>
        <Accordion.Body >
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{marginTop:'15px',backgroundColor:'gray',fontWeight:'bold'}}>
        <Accordion.Header>How much does Netflix cost?</Accordion.Header>
        <Accordion.Body>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" style={{marginTop:'15px',backgroundColor:'gray',fontWeight:'bold'}}>
        <Accordion.Header>Where can I watch?</Accordion.Header>
        <Accordion.Body>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{marginTop:'15px',backgroundColor:'gray',fontWeight:'bold'}}>
        <Accordion.Header>How do I camcel?</Accordion.Header>
        <Accordion.Body>
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" style={{marginTop:'15px',backgroundColor:'gray',fontWeight:'bold'}}>
        <Accordion.Header>What can I watch on Netflix</Accordion.Header>
        <Accordion.Body>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" style={{marginTop:'15px',backgroundColor:'gray',fontWeight:'bold'}}>
        <Accordion.Header>Is Netflix goood for kids?</Accordion.Header>
        <Accordion.Body>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
      
        </Accordion.Body>
      </Accordion.Item>
  
    </Accordion>
    <br></br>
    <h2 style={{color:'white'}}>Ready to watch? Enter your email to create or restart your membership.</h2>
          <input placeholder="Email address" style={{height:'40px',marginTop:'10px',width:'30%',marginBottom:'50px',backgroundColor:'black',color:'white'}}></input>  <Button className="btn-lg btn-danger">Get Started</Button>
    </center>
    </div>

}

export default SixthCom