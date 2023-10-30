import { getMovieDetails, getSimilarMovies } from "@/utils/request"

async function MovieDetailsPage({params}) {
    const movieDetails = await getMovieDetails(params.id)
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face"
    const similarMovies = await getSimilarMovies(params.id)

    return (
        <div className="mx-3 my-4">
            <div className="d-flex align-items-center">
                <div className="col-3">
                        <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt={movieDetails.title} />
                    </div>
                    <div className="mx-5">
                        <h3>{movieDetails.title}</h3>
                        <div className="d-flex">
                            <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.release_date}</p>
                            <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.original_language}</p>
                            <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.status}</p>
                        </div>
                            <div>
                                <p>
                                {movieDetails.genres && movieDetails.genres.map(genre => (
                                <span className="p-1 mx-1 text-white rounded bg-dark me-2" key={genre.id}>{genre.name}</span>
                                ))}
                                </p>
                            </div>
                            <p>{movieDetails.overview}</p>
                    </div>
            </div>


                {/* Similarl Movies */}
                <div className="my-3">
                    <h2>Similar Movies</h2>
                    <div className="flex-wrap gap-3 d-flex">
                        {similarMovies.map(movie => {
                        return(
                            <div>
                                <img src={IMAGE_BASE_URL + movie.poster_path}/>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
        </div>
    )
}

export default MovieDetailsPage