
import { useState, useEffect } from "react"




export default function MainPage() {

    

    const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
    }) 

    const [memeArray, setMemeArray] = useState([])
  

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(jsonData => setMemeArray(jsonData.data.memes)) 
    }, [])
      

    function changeText(event) {

        const {value, name} = event.currentTarget
        setMeme(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={changeText}
                        value = {meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText" 
                        value = {meme.bottomText}
                        onChange={changeText}


                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={ meme.imageUrl }/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}