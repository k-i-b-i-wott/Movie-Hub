import React from 'react'
import { useState } from 'react'

import './App.css'

const App = () => {

    const [show, setShow] = useState('')
    const [results, setResults] = useState(null)


async function getProducts(){
    const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q= ${show}`)
    const data = await res.json()
    console.log(data)
    setResults(data);
}

const handleSubmit = (e) => {
    e.preventDefault();
    getProducts();
}




  return (
    <div className='container'>
                <h1>Find the details About Your Favorite Show or Movie</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Show or Movie Name' onChange={(e) => setShow(e.target.value)} />
            <button type='submit' >Search</button>
        </form>
        <Show show={results} />
    </div>
  )
}

export default App



function Show({show}){
    if(!show){
        return null;
    }
    return(
        <div className='output'>
            <div className="imageWrapper">
                <img src={show?.image?.medium} alt="Show image" />
            </div>
            <h1>{show?.name}</h1>
            <div className="description">            
            <h3>Genres: {show?.genres.join(',') || "N/A"}</h3>
            <h3>Languages: {show?.language}</h3>
            <h3>Status: {show?.status}</h3>
            <h3>Time: {show?.schedule?.time}</h3>
            <h3>Country: {show?.network.country?.name}</h3>
            <h3> Type: {show?.type}</h3>
            </div>
            <h4>Overview</h4>
            <p dangerouslySetInnerHTML={{__html: show?.summary|| 'No summmary'}}>

            </p>
        </div>
    )
}