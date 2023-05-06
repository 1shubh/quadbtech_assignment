import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ShowCard } from '../components/ShowCard'
import { Loader } from '../components/Loader'
import "./home.css"

export const Home = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res)=>{
         setData(res.data)
          setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(data)
  return loading ? <Loader/> : (
    <div className='showsContainer'>
        {
          data.map((shows)=>(
            shows.show.image ? 
            <ShowCard key={shows.show.id} {...shows.show}/> : null
        ))
        }
    </div>
  )
}
