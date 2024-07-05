import React from "react";

function SingleMovieCard({ showingsArray }) {
  // console.log(showingsArray.map((show) => show.title));
  return (
    <>
      <h1>Wicked TEST</h1>
      {showingsArray?.map((show) => {
        return (
          <>
            <div>
              <img src={show.image} alt={show.title} />
            </div>
            <div>{show.title}</div>
            <h4>{show.excerpt}</h4>
          </>
        );
      })}
    </>
  );
}

export default SingleMovieCard;
