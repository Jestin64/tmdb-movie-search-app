import React, { useState } from "react"
import MovieCards from "./MovieCards"


function SearchMovies() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    

    async function movieSearch(e){
        e.preventDefault()
        if(query!==''){
            try{
                const api_url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
                let res = await fetch(api_url)
                let data = await res.json()
                // console.log(data.results)
                setMovies(data.results)
            } catch(err) { console.log(err) }
        } 
    }

    return (
        <div>
            <form className="form" onSubmit={movieSearch}>
                <label className="label" htmlFor="query">Enter Movie</label> 
                <input placeholder="ex: Jurassic park" className="input" name="query"
                onChange={e=>setQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => {
                    return (<MovieCards key={movie.id} movie={movie} />)
                })}
            </div>
        </div>
    )
}

export default SearchMovies
