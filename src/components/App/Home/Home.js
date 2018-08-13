import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ArticlesDetails from './ArticlesDetails';
import ArticlesList from './ArticlesList';
import ErrorBoundary from '../../shared/ErrorBoundary';
import Loading from '../../shared/Loading';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    const {
      match: { params: { id } },
      onLoadArticles,
      onLoadComments,
      onSelectArticle
    } = this.props;

    onLoadArticles();

    if (id) {
      const articleId = parseInt(id, 10);
      onSelectArticle(articleId);
      onLoadComments(articleId);
    }
  }

  render() {
    const {
      articles,
      articlesCount,
      comments,
      fetching,
      onAddComment,
      onAddReply,
      onLoadComments,
      onLoadReplies,
      onNextPage,
      onPrevPage,
      onSelectArticle,
      page,
      selectedArticleId
    } = this.props;
    const selectedArticle = articles.filter(a => a.id === selectedArticleId)[0];

    // const { match: { params: { id } } } = this.props;

    return (
      <div className="home">
        <ErrorBoundary>
          {fetching && <Loading />}
        </ErrorBoundary>
        <ErrorBoundary>
          <ArticlesList
            articles={articles}
            articlesCount={articlesCount}
            onLoadComments={onLoadComments}
            onNextPage={onNextPage}
            onPrevPage={onPrevPage}
            onSelectArticle={onSelectArticle}
            page={page}
            selectedArticleId={selectedArticleId}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <ArticlesDetails
            comments={comments}
            onAddComment={onAddComment}
            onAddReply={onAddReply}
            onLoadReplies={onLoadReplies}
            selectedArticle={selectedArticle}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

Home.propTypes = {
  articles: PropTypes.array,
  articlesCount: PropTypes.number,
  comments: PropTypes.array,
  fetching: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  onAddComment: PropTypes.func,
  onAddReply: PropTypes.func,
  onLoadArticles: PropTypes.func,
  onLoadComments: PropTypes.func,
  onLoadReplies: PropTypes.func,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onSelectArticle: PropTypes.func,
  page: PropTypes.number,
  selectedArticleId: PropTypes.number
};

export default Home;
