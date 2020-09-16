import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousell.css";
import CarouselLoader from './CarouselLoader';

const breakPoints = [
  { width: 500, itemsToShow: 3, autoplay: true },
  { width: 768, itemsToShow: 3, autoplay: true },
  { width: 1200, itemsToShow:5, autoplay: true },
  { width: 1500, itemsToShow:5, autoplay: true },
];

export default class Carousell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: null,
    };
  }

  componentDidMount() {
    // #1. First of all you have to fetch the images.
    fetch("https://ancient-caverns-16784.herokuapp.com/movies?take=100&skip=0")
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
      return (
        <div className="loader">
          <CarouselLoader />
        </div>
      );

    // #3. Finally, render the `<Carousel />` with the state's images.
    return (
      
        <Carousel enableAutoPlay autoPlaySpeed={3500} breakPoints={breakPoints}>
          {images
            .filter((image) => image.Poster && image.Poster !== "N/A")
            .map((image, index) => {
              return image.Poster !== "N/A" ? <div key={index}>
                <img
                  className="image"
                  src={image.Poster}
                  alt={image.title}
                />
              </div> : <div key={image.id}>
                <img className=".noDisplay" alt={image.title} />
              </div>;
          })}
        </Carousel>
    );
  }
}
