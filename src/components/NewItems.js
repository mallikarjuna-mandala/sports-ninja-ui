import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItem from './NewItem'

class NewItems extends Component {
  render() {
    return (
      <span className="news-items">
        <div className="prev-next">
          <a className="action-btn" onClick={(event) => this.props.prevNewsItemList(event)} >&laquo; Previous</a>
          <a className="action-btn" id="next-btn" onClick={(event) => this.props.nextNewsItemList(event)}>Next &raquo;</a>
        </div>
        { this.props.articles.length === 0 &&
          <div className="not-found-articles"> No News Articles Found. Please click Previous Button to read News Articles</div>
        }
        {this.props.articles.map(article =>
            <NewItem
              key={article.id}
              title={article.title}
              url={article.url}
              image_url={article.image_url}
              description={article.description}
            />
          )}
      </span>
    )
  }
}

const getArticles = articles_deatil => {
  if(articles_deatil['articles'] === undefined){
    return [];
  }
  return articles_deatil.articles;
}

const mapStateToProps = state => ({
  articles: getArticles(state.articles.data)
})

const mapDispatchToProps = dispatch =>{
  return {
    nextNewsItemList: (event)=>{
      event.preventDefault();
      dispatch({ type: 'FETCH_NEWS_ITEMS_REQUEST', action_name: 'NEXT' })
    },
    prevNewsItemList: (event)=>{
      event.preventDefault();
      dispatch({ type: 'FETCH_NEWS_ITEMS_REQUEST', action_name: 'PREVIOUS' })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItems)
