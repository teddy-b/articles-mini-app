import { combineReducers } from 'redux';

import {
  articles,
  page,
  comments,
  articlesComments,
  fetching,
  selectedArticleId,
  errors
} from './articlesReducer';

const rootReducer = combineReducers({
  articles,
  page,
  comments,
  articlesComments,
  fetching,
  selectedArticleId,
  errors
});

export default rootReducer;
