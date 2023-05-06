import React from 'react'
import "./showCard.css"
import {Link as RouterLink} from "react-router-dom"

export const ShowCard = ({id,name,image,rating,type,premiered,language,url}) => {
  return (
    <div id='showCard'>
        <div id='showPoster'>
          <img src={image.original} alt="img" />
        </div>
        <p id='showName'>{name}</p>
        <p id='showLang'>Language : {language}</p>
        <p id='showPrem'> Premired On : {premiered}</p>
        <RouterLink to={`/more/${id}`}>
           <button id='Showbutton'>More</button>
        </RouterLink>
    </div>
  )
}
