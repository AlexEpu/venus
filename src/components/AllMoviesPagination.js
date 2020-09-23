import React, { Component } from "react";
import "./AllMoviesPagination.css";
import Pagination from "react-bootstrap/Pagination";

class MoviePagination extends Component {
  render() {
    const {
      currentPage,
      nextPage,
      prevPage,
      numberOfPages,
      selfPage,
    } = this.props;
    let CurrentNumberOfPages = numberOfPages;
    let active = currentPage;
    let items = [];
    for (let number = 1; number <= CurrentNumberOfPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            selfPage(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }

    const pages = (
      <Pagination>
        <Pagination.Prev onClick={prevPage} />
        <Pagination>{items}</Pagination>
        <Pagination.Next onClick={nextPage} />
      </Pagination>
    );

    return <div className="pag-main-container">{pages}</div>;
  }
}

export default MoviePagination;
