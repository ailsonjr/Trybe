import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import Posts from './components/Posts';
import Selector from './components/Selector';
import MyContext from './context/MyContext';
import TrafficSignal from './TrafficSignal';

class App extends Component {
  componentDidMount() {
    const { fetchPost } = this.context;
    fetchPost();
  }

  renderLastUpdateAt() {
    const { selectedSubreddit, postsBySubreddit } = this.context;
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    if (!lastUpdated) return null;

    return (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    )
  }

  renderRefreshButton() {
    const { isFetching, refreshSubrediit } = this.context;

    if (!isFetching) return null;

    return (
      <button
        type="button"
        onClick={(event) => refreshSubrediit(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    )
  }

  render() {
    const { selectedSubreddit, postsBySubreddit, isFetching } = this.context;
    const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
    const isEmpty = posts.length === 0;

    return (
      <div>
        <Cars />
        <TrafficSignal />
        <Selector />
        <div>
          {this.renderLastUpdateAt}
          {this.renderRefreshButton}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts />}
      </div>
    );
  }
}

App.contextType = MyContext;

export default App;
