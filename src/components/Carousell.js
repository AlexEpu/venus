import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousell.css";

const breakPoints = [
  { width: 500, itemsToShow: 3, autoplay: true },
  { width: 768, itemsToShow: 3, autoplay: true },
  { width: 1200, itemsToShow: 5, autoplay: true },
  { width: 1500, itemsToShow: 5, autoplay: true },
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
      .then((response) => response.json())
      // If it's a JSON response, you have to parse it firstly
      .then((images) => this.setState({ images: images.results })); // #2. After that you have to keep the images in the component's state.
  }

  render() {
    const { images } = this.state;
    console.log(images);
    if (!images) return <div></div>;

    // #3. Finally, render the `<Carousel />` with the state's images.
      return (
        
      <Carousel enableAutoPlay autoPlaySpeed={5500} breakPoints={breakPoints}>
        {images
          .filter((image) => image.Poster && image.Poster !== "N/A")
          .map((image, key) => {
            if (image.Poster !== "N/A")
              return (
                <div key={image.id}>
                  <img className="image" src={image.Poster} alt={image.title} />
                </div>
              );
            else
              return (
                <div key={image.id}>
                  <img className=".noDisplay" alt={image.title} />
                </div>
              );
          })}
      </Carousel>
    );
  }
}
