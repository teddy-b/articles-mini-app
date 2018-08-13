import { createSelector } from 'reselect';

export const articlesByIdSelector = state => state.articles.byId;
export const articlesAllIdsSelector = state => state.articles.allIds;

export const commentsByIdSelector = state => state.comments.byId;
export const commentsAllIdsSelector = state => state.comments.allIds;

export const selectedArticleIdSelector = state => state.selectedArticleId;

export const articlesCommentsSelector = state => state.articlesComments;

export const articlesSelector = createSelector(
  articlesByIdSelector,
  articlesAllIdsSelector,
  (articlesById, articlesAllIds) => articlesAllIds.map(id => articlesById[id])
);

export const commentsSelector = createSelector(
  commentsByIdSelector,
  articlesCommentsSelector,
  selectedArticleIdSelector,
  (commentsById, articlesComments, selectedArticleId) => {
    let comments = [];
    if (articlesComments[selectedArticleId]) {
      comments = articlesComments[selectedArticleId].map(id => commentsById[id]);
    }

    return comments;
  }
);
