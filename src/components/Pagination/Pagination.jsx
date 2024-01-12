import React from "react";
import "./Pagination.scss";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(pageNumber) {
    this.props.onPageChange(pageNumber);
  }

  render() {
    const { itemsPerPage, totalItems, currentPage } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className={`${this.props.className} pagination`}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              this.handleClick(number);
            }}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
