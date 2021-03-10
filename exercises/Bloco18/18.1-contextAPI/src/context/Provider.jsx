import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPostsBySubreddit } from '../services/redditAPI';

const { Consumer } = MyContext;

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
      postsBySubreddit: {
        frontend: {},
        reactjs: {},
      },
      selectedSubreddit: 'reactjs',
      shouldRefreshSubreddit: false,
      isFetching: false,
    }

    this.movieCar = this.movieCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.shouldFetchPosts = this.shouldFetchPosts.bind(this);
    this.handleFetchSuccess = this.handleFetchSuccess.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);
    this.handleSubredditChange = this.handleSubredditChange.bind(this);
    this.handleRefreshSubreddit = this.handleRefreshSubreddit.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { state } = this;
    const { shouldRefreshSubreddit } = state;
    const selectedSubredditChanged = prevState.selectedSubreddit !== state.selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      this.fetchPosts();
    }
  }

  movieCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  fetchPosts() {
    if (!this.shouldFetchPosts()) return;

    this.setState({
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    const { selectedSubreddit } = this.state;
    getPostsBySubreddit(selectedSubreddit)
      .then(this.handleFetchSuccess, this.handleFetchError);
  }

  shouldFetchPosts() {
    const {
      selectedSubreddit,
      postsBySubreddit,
      shouldRefreshSubreddit,
      isFetching,
    } = this.state;
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  handleFetchSuccess(json) {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    this.setState((state) => {
      const newState = {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
      };

      newState.postsBySubreddit[state.selectedSubreddit] = {
        items,
        lastUpdated,
      };

      return newState;
    });
  }

  handleFetchError(error) {
    this.setState((state) => {
      const newState = {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
      };

      newState.postsBySubreddit[state.selectedSubreddit] = {
        error: error.message,
        items: [],
      };

      return newState;
    });
  }

  handleSubredditChange(selectedSubreddit) {
    this.setState({ selectedSubreddit });
  }

  handleRefreshSubreddit() {
    this.setState({ shouldRefreshSubreddit: true });
  }

  render() {
    const { selectedSubreddit, postsBySubreddit } = this.state;
    const context = {
      ...this.state,
      moveCar: this.movieCar,
      changeSignal: this.changeSignal,
      selectSubreddit: this.handleSubredditChange,
      fetchPosts: this.fetchPosts,
      refreshSubreddit: this.handleRefreshSubreddit,
      availableSubreddits: Object.keys(postsBySubreddit),
      posts: postsBySubreddit[selectedSubreddit].items,
    };

    const { children } = this.props;

    return (
      <Provider value={context}>
        {children}
      </Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, Consumer };
