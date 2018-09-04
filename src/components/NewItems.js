import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItem from './NewItem'
// import ListGroup from 'react-bootstrap/lib/ListGroup';
// import Col from 'react-bootstrap/lib/Col';

class NewItems extends Component {
  debugger;
  render() {
    return (
      <span className="news-items">
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
  if(articles_deatil['articles'] == undefined){
    return [];
  }
  return articles_deatil.articles;
}

const mapStateToProps = state => ({
  articles: getArticles(state.articles)
})

// const mapStateToProps = state => {
//   debugger;
//   return { articles: state.articles.articles }
// }

export default connect(mapStateToProps, null)(NewItems)
