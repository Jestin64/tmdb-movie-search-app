import React from "react"


function MovieCards(props){
    return (
        <div className="card" 
        style={{
            backgroundImage: 'url('+`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`+')', 
          }}>
            <img className='card--image'
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
                alt={props.movie.original_title + 'poster'} />

            <div className="card--content">
                <h3 className="card--title">{props.movie.title}</h3>
                <p>Release date: {props.movie.release_date}</p>
                <p>Rating: {props.movie.vote_average}</p>
                <p className="card--desc">{props.movie.overview}</p>
            </div>

        </div>
    )
}

export default MovieCards