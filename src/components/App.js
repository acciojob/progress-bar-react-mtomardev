
import React, {useState, useEffect} from "react";
import './../styles/App.css';


const App = () => {
  let [progress, setProgress] = useState(0);

  useEffect(()=>{
    let progressbar = setInterval(()=>{
       // Increment progress by 10% every second until it reaches 100%
      setProgress((prevProgress) => {
        if(prevProgress < 100){
          return prevProgress + 10
        }
        else{
          // Stop the interval when progress reaches 100%
          clearInterval(progressbar);
          return prevProgress
        }
      } )
    }, 1000) 
  // Cleanup function to clear the interval when component unmounts
  return () => clearInterval(intervalId);

  },[])// Empty dependency array ensures the effect runs only once
  return (
    <div>
      <h1>Progress Bar</h1> 
    <div id="barOuter" style={{width: '100%', backgroundColor: '#ddd' }}>
        {/* Do not remove the main div */}
        
    <div id="barInner" style={{
      width:`${progress}%`,
  height: '30px',
  // backgroundColor: '#4caf50',
  backgroundColor: 'blue',
  textAlign: 'center',
  color: 'white',
  lineHeight: '30px'

  }}>
    {`${progress}%`}

    </div>
    </div>
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
        Progress: {progress}%
      </div>
    </div>
  )
}

export default App
