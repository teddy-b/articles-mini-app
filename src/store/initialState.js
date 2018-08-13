const initialState = {
  articles: {
    byId: {
    },
    allIds: []
  },
  page: 0,
  comments: {
    byId: {
    },
    allIds: []
  },
  articlesComments: {
  },
  fetching: false,
  selectedArticleId: null,
  errors: []
};

export default initialState;
