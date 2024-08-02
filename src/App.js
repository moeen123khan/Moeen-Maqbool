import Alert from './compponents/Alert';
import Navbar from './compponents/Navbar';
import TextForm from './compponents/TextForm';
import About from './compponents/About';
import Data from './compponents/Data';
import React, {useState} from 'react'




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


 
<Navbar title= "MoeenQfr" mode={mode} toggleMode={toggleMode} />

<Alert Alert={alert} />



<div className='container my-3 fs-5'>



<TextForm showAlert={showAlert} heading="Try TextUtills - Moeen Maqbool - Words Counter Chracter Counter & Remove Extra Spacess" mode={mode} />
<About/>

<Data/>

 
</div>

</>
  );
}
export default App
  