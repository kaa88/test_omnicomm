const paginationMixin = {
  handleClick(page) {
    this.setState({
      activePage: page,
    });
  },
};

export default paginationMixin;
