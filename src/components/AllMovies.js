import React from "react";
import Carousel from "react-elastic-carousel";
import "./AllMovies.css";
// import CarouselLoader from "./CarouselLoader";

export default class AllMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: null,
    };
  }

  componentDidMount() {
    // #1. First of all you have to fetch the images.
 fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999")
   .then((response) => {
     if (!response.ok) {
       throw response;
     }
     return response.json(); //we only get here if there is no error
   })
   .then((images) => {
     this.setState({ images: images.results });
   })
   .catch((err) => {
     this.displayError();
   });
  }

  displayError() {
    return (
      <div>
        <h3>Oupsie..we couldn't get the images.</h3>
      </div>
    );
  }

  render() {
    const { images } = this.state;
    console.log(images);
    if (!images)
      return <div className="loader">{/* <CarouselLoader /> */}</div>;

    // #3. Finally, render the `<Carousel />` with the state's images.
    return (
      <div className="main-movie-card">
        {images
          .filter((image) => image.Poster && image.Poster !== "N/A")
          .map((image, index) => {
            return image.Poster !== "N/A" ? (
              <div className="movie-card">
                <img className="image" src={image.Poster} alt={image.title} />
              </div>
            ) : (
              {
                /* <div>
          <Button onClick={() => this.images.slidePrev()}>Prev</Button>
          <Button onClick={() => this.images.slideNext()}>Next</Button>
                </div> */
              }
            );
          })}
      </div>
    );
  }
}
