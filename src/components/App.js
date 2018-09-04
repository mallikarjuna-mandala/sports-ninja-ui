
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Filter from './Filter'
import NewItems from './NewItems'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadNewItems();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="filter-news">
          <Filter />
          <NewItems />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadNewItems: ()=>{
      dispatch({ type: 'FETCH_NEWS_ITEMS_REQUEST' });
    }
  }
}

export default connect(null, mapDispatchToProps)(App);

// export default App;
