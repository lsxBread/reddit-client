import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { subRedditList } from 'const';

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  font-size: 42px;
  font-weight: 300;
  font-family: Roboto;
  padding: 1rem 0 1rem 0.5rem;
`;

type PathParamsType = {
  subreddit: string;
};

type Props = RouteComponentProps<PathParamsType>;

const Header: React.FC<Props> = (props) => {
  const { location } = props;
  const subreddit = location.pathname.split('/')[1];
  return (
    <Wrapper>
      {subreddit && subRedditList.includes(subreddit)
        ? subreddit.toUpperCase()
        : 'WELCOME'}
    </Wrapper>
  );
};

export default withRouter(Header);
