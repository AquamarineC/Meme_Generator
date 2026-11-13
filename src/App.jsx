import { useState, useEffect } from 'react' 
import Header from './components/Header'
import MainPage from './components/MainPage'



function WindowTracker(){

    const [realTimeWidth, setRealTimeWidth] = useState(window.innerWidth)



            useEffect(() => {

                function watchWindowWith(){

                    setRealTimeWidth(window.innerWidth)
                }

                
                window.addEventListener("resize", watchWindowWith)
                return function(){
                    window.removeEventListener("resize", watchWindowWith)
                }
            },[])
   

        return (
            <h1>Window Width: {realTimeWidth}</h1>
        )
    }




function App() {

    const [show, setShow] = useState(true)

    function toggleShow(){
        setShow(prev => !prev)
    }

    
 
    
    return (
        <> 
            <button onClick={toggleShow}>
                Toggle Window Tracker
            </button>
            {show === true? <WindowTracker /> : null}
        </>
    )
}

export default App
