import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./singlePage.css"
import {FcRating} from "react-icons/fc"
import {FaLanguage} from "react-icons/fa"
import { Loader } from '../components/Loader';
import {Link as RouterLink} from "react-router-dom"

export const SinglePage = () => {
    const {id} = useParams();
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://api.tvmaze.com/shows/${id}`).then((res)=>{
         setData(res.data)
         setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
 
    const handleStore = () => {
        localStorage.setItem("bookingInfo",JSON.stringify(data))
    }
  return loading ? <Loader/> : (
    <div id='moreContainer'>
        {
            data.image ? 
            <>
            <div id='imageContainer'>
              <div id='singleImage'>
                <img src={data.image.original} alt="" />
              </div>
              <div id='singleButtonContainer'>
                <p id='singleName'>{data.name}</p>
            <RouterLink to={`/bookticket`}>
                <button id='booknow' onClick={handleStore}>Book Now</button>
            </RouterLink>
              </div>
             </div>
             <div id='summaryContainer'>
            {
                `${data.summary}`
            }
            <div id='singleInfo'>
                <p><FcRating fontSize={"25px"}/> {data.rating.average}</p>
                <p><FaLanguage fontSize={"30px"}/> {data.language}</p>
                <p>{data.genres}</p>
            </div>
            </div> 
          </>: undefined
        }
        
    </div>
  )
}
