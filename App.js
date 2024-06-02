import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React,{useState} from 'react';
import Alert from './Component/Alert';
import About from './Component/About';

let name="Vineet";
function App() {
  const [alert,setalert] =useState(null);
  const showAlert = (message, type) => {
    setalert({
        msg: message,
        type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);}
  const [mode,setMode] = useState('dark');//whether a darkmode is enable or not
  const togglemode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.background='#042743';
    setalert("Dark mode has been enabled","success");
    document.title='TextUtils - Dark Mode';
    setInterval(()=>{
      document.title='TextUtils - Dark Mode';  
    },2000)
    }
    else {
         setMode('light')
         document.body.style.background='white';
         setalert("light mode has been enabled","success");
         document.title='TextUtils - light Mode';
     }}
  return (
    <>
  {/* <Navbar title="TextUtils" Abouttextutils="About"/>   */}
  {/* <Navbar/> */}
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
  <Alert  alert="This is alert"/>
  <div className="container my-3">
 <TextForm  showAlert={showAlert} heading="Enter the text to analyze"/>
</div> 
  {/* <About/>  */}
  </>);
}
export default App;