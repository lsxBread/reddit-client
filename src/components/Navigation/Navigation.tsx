import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import { withRouter, Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { subRedditList } from 'const'

type PathParamsType = {
  subreddit: string;
};

type Props = RouteComponentProps<PathParamsType>;

const Wrapper = styled.div`
  width: 250px;
  height: 80vh;
  position: fixed;
  right: 10px;
  top: 10vh;
  background-color: #37383a;
  overflow-y:scroll;
`;

const Title = styled.div`
  text-align: center;
  background-color: #4e5053;
  font-size: 16px;
  padding: 15px;
  color: #fff;
  font-family: Roboto;
`;

const Navigation: React.FC<Props> = (props) => {
  const { location } = props;
  const currentSubreddit = location.pathname.split('/')[1];
  return (
    <Wrapper>
      <Title>NAVIGATION</Title>
      {subRedditList.map((subreddit) => {
        return (
          <Link key={subreddit} to={`/${subreddit}`} style={{ textDecoration: 'none' }}>
            <NavigationItem
              key={subreddit}
              text={subreddit}
              selected={subreddit === currentSubreddit}
            />
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default withRouter(Navigation);
