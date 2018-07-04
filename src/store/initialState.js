const initialState = {
  articles: {
    data: [],
    totalCount: 0
  },
  page: 0,
  comments: [],
  fetching: false,
  selectedArticleId: null,
  errors: []
};

export default initialState;
