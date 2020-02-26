import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import './List.scss';

function Card(props) {

    const [visibility,
        setVisibility] = useState(false)
    const visible = visibility
        ? 'visible'
        : 'hidden';

    return (
        <div
            className='Card_Item'
            onMouseEnter={() => setVisibility(!visibility)}
            onMouseLeave={() => setVisibility(!visibility)}
            onClick={props.click}>
            <p>{props.name}</p>
            <div className={visible}><FontAwesomeIcon icon={faPlayCircle} /></div>
        </div>
    )
}

export default Card
