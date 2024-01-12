const defaultValue = "Russian Federation";
const defaultItemsPerPage = 10;
export const defaultactivePage = 1;

const ApiMixinFactory = {
  getApiMixin(httpClient) {
    return {
      getInitialState() {
        return {
          universities: [],
          value: defaultValue,
          itemsPerPage: defaultItemsPerPage,
          activePage: defaultactivePage,
          isPending: false,
        };
      },

      UNSAFE_componentWillMount() {
        this.apiClient = httpClient;
        this.search();
      },

      componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
          this.search();
        }
      },

      search() {
        const value = this.state.value;
        this.setState({
          isPending: true,
        });
        this.apiClient({
          url: `http://universities.hipolabs.com/search?country=${value}`,
          method: "GET",
        })
          .then((res) => this.setTable(res))
          .catch((err) => console.error(err))
          .always(() =>
            this.setState({
              isPending: false,
            })
          );
      },

      handleSearchChange(value) {
        this.setState({
          value: value.target.value,
        });
      },
    };
  },
};

export default ApiMixinFactory;
