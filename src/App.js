import './App.css';
import FifthCom from './components/FifthCom';
import FirstCom from './components/FirstComp';
import Footer from './components/Footer';
import FourthCom from './components/FourthCom';
import SecondCom from './components/SecondCom';
import SixthCom from './components/SixthCom';
import ThirdCom from './ThirdCom';

function App() {
  return <>
  <FirstCom/>
  <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'grey',
          height: '15px',
          marginTop:'-2px'
        }}
      />
      <SecondCom/>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'grey',
          height: '15px',
          marginTop:'-2px'
        }}
      />
      <ThirdCom/>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'grey',
          height: '15px',
          marginTop:'-2px'
        }}
      />
      <FourthCom/>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'grey',
          height: '15px',
          marginTop:'-2px'
        }}
      />
      <FifthCom/>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'grey',
          height: '15px',
          marginTop:'-2px'
        }}
      />
      <SixthCom/>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'grey',
          height: '15px',
          marginTop:'-2px'
        }}
      />
      <Footer/>
  </>
  

}

export default App;
