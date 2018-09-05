import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsSources from './NewsSources'
import Button from 'react-bootstrap/lib/Button';

class Filter extends Component {
  render() {
    return (
      <span className="filter" >
        <div className="filter-div">
          <div><h4>Filter News Articles By Source</h4></div>
          <NewsSources sources={this.props.sources} />
          <div className="filter-news-btn" >
            <Button bsStyle="primary" id="filter-articles">Filter Articles</Button>
          </div>
        </div>
      </span>
    )
  }
}

const getSources = sources_deatil => {
  if(sources_deatil['sources'] == undefined){
    return [];
  }
  return sources_deatil.sources;
}

const mapStateToProps = state => ({
  sources: getSources(state.sources.data)
})

export default connect(mapStateToProps, null)(Filter)
