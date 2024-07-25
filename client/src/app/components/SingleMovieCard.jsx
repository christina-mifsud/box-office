import React from "react";
import "../showings.css";

function SingleMovieCard({ showingsArray }) {
  // console.log(showingsArray.map((show) => show.title));

  return (
    <>
      {showingsArray?.map((show) => {
        return (
          <>
            <div
              className={
                show.booking_until
                  ? "single-movie-card"
                  : "single-movie-card overlay"
              }
            >
              <img src={show.image} alt={show.title} />
              <div className="single-movie-card-copy">
                <h3>{show.title}</h3>
                {show.booking_until ? (
                  <>
                    <a href={show.url}>About the show</a>
                    <h5 className="single-movie-card-label">
                      <a href={show.see_tickets}>Book Now</a>
                    </h5>
                  </>
                ) : (
                  <h5>Sold Out</h5>
                )}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default SingleMovieCard;
