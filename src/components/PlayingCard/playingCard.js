import React from 'react'
import './playingCard.css'

export const PlayingCard = ({ prefix, handleChange, value }) => {
    return (
        <div  className={`playing--card__div ${value}`} type='button' data-id={prefix.id} data-value={value} key={prefix.id} onClick={handleChange}>
            <p className="playing--card__p--text" data-value={value} data-id={prefix.id} >{prefix.prefix}</p>
        </div>
    )
}

export default PlayingCard;