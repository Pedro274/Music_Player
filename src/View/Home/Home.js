import React from 'react'
import './Home.scss';
import SongList from '../../Components/SongList/SongList'

function Home(props) {
    return (
        <div className='Song_List_Container'>
            <SongList {...props}/>
        </div>
    )
}

export default Home
