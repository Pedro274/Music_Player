import React, {useEffect, useState} from 'react';
import './SongList.scss';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Card from './List/List';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

function SongList(props) {

    const [arrOfSongs,
        setArrOfSongs] = useState([]);
    const [error,
        setError] = useState('');

    useEffect(() => {
        const fetchInf = async() => {
            try {
                const response = await axios.get('https://assets.breatheco.de/apis/sound/songs')
                const FirstTen = response.data.slice(0,10)
                const addingAuthor = FirstTen
                    .map(song => {
                        return {
                            ...song,
                            Author: 'Pedro'
                        }
                    })
                setArrOfSongs([...addingAuthor])
            } catch (error) {
                setError(error)
            }
        }
        fetchInf()
    }, [])


    const handleClick = (id) => {
        props.history.push(props.match.url + id)
    }

    let ListToShow = (arrOfSongs === [])
        ? <p>Loading...</p>
        : arrOfSongs.map(song => {
            return <Card key={song.id} name={song.name} click={() => handleClick(song.id)}/>
        })
        
    console.log(error)

    return (
        <div className='list'>
           {ListToShow}
           <Route path={props.match.url + ':id'}  component={MusicPlayer} />
        </div>
    )
}

export default SongList
