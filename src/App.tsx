import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import PostsContainer from 'components/Posts/PostsContainer';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2d2d2d;
  padding-left: 10px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Navigation />
        <Route path={`/:subreddit`} component={PostsContainer} />
      </AppWrapper>
    </Router>
  );
};

export default App;
