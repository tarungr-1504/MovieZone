import { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setMovieList(
      category === "All"
        ? movies
        : movies.filter((movie) => movie.category === category),
    );
  };

  return (
    <>
      <header className="site-header" id="top">
        <a className="brand-title" href="#top">
          MovieZone
        </a>
        <nav className="category-nav" aria-label="Filter movies by category">
          {[
            "All",
            "Action",
            "Thriller",
            "Animation",
            "Horror",
            "Drama",
            "Sci-Fi",
          ].map((category) => (
            <button
              key={category}
              type="button"
              className={`category-button${selectedCategory === category ? " category-button-active" : ""}`}
              aria-pressed={selectedCategory === category}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: "1300px",
          // backgroundColor:'yellow',
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Movies;
