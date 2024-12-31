import React, { useState } from 'react'
import "../css/search.css"

const Search = () => {
    
    var player;
    const [textInput, setTextInput] = useState('')

    return (
        <>
            <div className='input-wrapper'>
                <input type='text' id="textbox_id" placeholder='Type in a YouTube link' onChange={(e) => setTextInput(e.target.value)}></input>
                <button onClick={createIFrame}>Go</button>
            </div>
            
        </>
    )

    function createIFrame(){
        // Creates an <iframe> (and YouTube player)
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: textInput,
            events: {
                'onPlayerReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });        
    }

    function onPlayerReady() { 
        player.playVideo();
    }

    function onPlayerStateChange(event) {
        if(event.data == 0){
            player.destroy();
        }
    }
}

export default Search   