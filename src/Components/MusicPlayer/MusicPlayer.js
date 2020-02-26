import React, {useState, useEffect} from 'react';
import './MusicPlayer.scss';
import ReactAudioPlayer from 'react-audio-player';

import axios from 'axios';

function MusicPlayer(props) {

    const [videoToRender,
        setVideoToRender] = useState([])
    const [error,
        setError] = useState('');
    const songURL = "https://assets.breatheco.de/apis/sound/";

    console.log(props.match.params.id)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('https://assets.breatheco.de/apis/sound/songs');
                const videoToShow = await response
                    .data
                    .find(item => item.id === + props.match.params.id);
                setVideoToRender(videoToShow)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [props.match.params.id])

    console.log(error)
    const handelEnd = () => {props.history.push('/Home')}

    const musicPlayerReturn = (videoToRender === [])
        ? <p>Loading...</p>
        : <ReactAudioPlayer
            src={songURL + videoToRender.url}
            autoPlay
            controls
            onEnded={handelEnd}
            className='music_player'/>

    return musicPlayerReturn
    
    
}

export default MusicPlayer
