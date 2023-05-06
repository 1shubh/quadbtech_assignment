import React, { useState } from 'react'
import "./book.css"
export const Book = () => {
    const Ticketdata = JSON.parse(localStorage.getItem("bookingInfo")) || []
    const [tickets,setTickets] = useState(1)
    const [price,setPrice] = useState(150)
    
    const handleChange = (e) => {
       let selected = e.target.value;
       if(selected){
        setTickets(selected)
        setPrice(selected*150)
       }
    }
  return (
    <div id='bookContainer'>
        <div id='movieDetails'>
            <div id='moviePoster'>
                <img src={Ticketdata.image.original} alt="" />
            </div>
            <div>
              <p id='movieName'>Movie : {Ticketdata.name}</p>
              <p>Tickets : {tickets}</p>
              <p>Total: ${price}</p>
            </div>
        </div>
        <div id='form'>
            <p>Name</p>
               <input type="text" placeholder='Name' id="" />
          <p>Mobile Number</p>
           <input type="number" placeholder='Mobile Number' />
          <p>Number of Tickets</p>
           <select id="" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button id='submitBtn'>Book Now</button>
        </div>
    </div>
  )
}
