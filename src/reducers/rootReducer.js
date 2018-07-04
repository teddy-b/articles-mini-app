import { combineReducers } from 'redux';

import {
  articles,
  page,
  comments,
  fetching,
  selectedArticleId,
  errors
} from './articlesReducer';

const rootReducer = combineReducers({
  articles,
  page,
  comments,
  fetching,
  selectedArticleId,
  errors
});

export default rootReducer;
