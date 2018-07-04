import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  loadArticles,
  selectArticle,
  loadComments,
  loadReplies,
  addComment,
  addReply,
  nextPage,
  prevPage
} from '../../actions';
import Home from '../../components/App/Home';

const mapStateToProps = state => ({
  articles: state.articles.data,
  page: state.page,
  articlesCount: state.articles.totalCount,
  comments: state.comments,
  fetching: state.fetching,
  selectedArticleId: state.selectedArticleId
});

const mapDispatchToProps = dispatch => ({
  onLoadArticles() {
    dispatch(loadArticles());
  },
  onLoadComments(articleId) {
    dispatch(loadComments(articleId));
  },
  onLoadReplies(parentCommentId) {
    dispatch(loadReplies(parentCommentId));
  },
  onSelectArticle(articleId) {
    dispatch(selectArticle(articleId));
  },
  onAddComment(articleId, event) {
    if (event.key === 'Enter') {
      dispatch(addComment(articleId, event.target.value));
      event.target.value = '';
      event.target.blur();
    }
  },
  onAddReply(parentCommentId, text) {
    dispatch(addReply(parentCommentId, text));
  },
  onNextPage() {
    dispatch(nextPage());
  },
  onPrevPage() {
    dispatch(prevPage());
  }
});

const ConnectedHome = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export default ConnectedHome;
