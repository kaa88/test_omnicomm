import React from "react";
import createReactClass from "create-react-class";
import $ from "jquery";
import "./App.scss";

import Pagination from "../Pagination/Pagination";

import ApiMixinFactory from "../../mixins/apiMixin";
import tableMixin from "../../mixins/tableMixin";
import paginationMixin from "../../mixins/paginationMixin";

const apiMixin = ApiMixinFactory.getApiMixin($.ajax);

const App = createReactClass({
  mixins: [tableMixin, paginationMixin, apiMixin],

  render() {
    const start = this.state.itemsPerPage * (this.state.activePage - 1);
    const end = start + this.state.itemsPerPage;
    const universities = this.state.universities.slice(start, end);
    const table = this.renderTable(universities);

    return (
      <div className="app">
        <label htmlFor="search">Search</label>

        <br />

        <input
          id="search"
          onChange={this.handleSearchChange}
          type="text"
          value={this.state.value}
        />

        {this.state.isPending ? (
          <p>Loading...</p>
        ) : !!universities.length ? (
          <>
            <Pagination
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.state.universities.length}
              currentPage={this.state.activePage}
              onPageChange={(pageNumber) => this.handleClick(pageNumber)}
              className="app__pagination"
            />

            <div className="app__table">{table}</div>
          </>
        ) : (
          <p>No items found</p>
        )}
      </div>
    );
  },
});

export default App;
