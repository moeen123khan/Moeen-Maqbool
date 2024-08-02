import Alert from './compponents/Alert';
import Navbar from './compponents/Navbar';
import TextForm from './compponents/TextForm';
// import About from './compponents/About';
import React, {useState} from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import Data from './compponents/Data';
// import Footer from './compponents/Footer';



function App() {
const [mode, setMode] = useState('light'); // weather dark mode

const [alert, setsAlert] = useState(null);

const showAlert = (message, type)=>{
setsAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setsAlert(null);
}, 1000);
}



const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "Success");

    setInterval(() => {
        document.title = 'Moeen QFR - Dark Mode';
    }, 3000);
    setInterval(() => {
      document.title = 'install Moeen QFR Now';
  }, 2000);

  }
// 2
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "Success");
  document.title = 'Moeen QFR - Light Mode';

  setInterval(() => {
    document.title = 'Moeen QFR - Dark Mode';
}, 2000);
setInterval(() => {
  document.title = 'install Moeen QFR Now';
}, 1500);

}
}

  return (
<>   
 {/* import compponents */}
{/* <Navbar title= "MoeenQfr" AboutText="About" mode={mode} /> */}
{/* <Router> */}
<Navbar title= "MoeenQfr" mode={mode} toggleMode={toggleMode} />
<Alert Alert={alert} />
<div className='container my-3 fs-4'>
<TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode} />
{/* <Routes>
  
  <Route path="/mydata" element={<Data/>} />
      {/* <Route exact path="/about">
          <About />
          </Route> */}
          {/* <Route path="/about" element={<About />} /> */}
              {/* <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode} />
      </Route> */}
      {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode} />} /> */}
{/* </Routes> */}
</div>
{/* </Router> */}
{/* <Footer/> */}
</>
  );
}
export default App
  