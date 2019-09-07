import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import snoowrap from 'snoowrap';
import { RouteComponentProps } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import SinglePost from 'components/Posts/SinglePost';

type PathParamsType = {
  subreddit: string;
};

type Props = RouteComponentProps<PathParamsType>;

type Post = {
  score: number;
  title: string;
  author: string;
  commentsNum: number;
  created: number;
};

type FetchedResults = {
  listOfPosts: Array<Post>;
  isFetching: boolean;
};

const PostsWrapper = styled.div`
  width: calc(100vw - 280px);
  height: 90vh;
  overflow: scroll;
`;

const PostContainer = (props: Props) => {
  const { match } = props;
  const subreddit = match.params.subreddit;
  const [fetchedResults, setFetchedResults] = useState<FetchedResults>({
    listOfPosts: [],
    isFetching: true
  });
  const r = useRef(
    new snoowrap({
      userAgent: 'code testing',
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })
  ).current;

  useEffect(() => {
    setFetchedResults({
      ...fetchedResults,
      isFetching: true
    });
    r.getHot(subreddit, { count: 25, limit: 25 }).then((result) => {
      const listOfPosts = result.map((submission) => {
        const { title, author, num_comments, score, created } = submission;
        return {
          title,
          author: author.name,
          commentsNum: num_comments,
          score,
          created
        };
      });
      setFetchedResults({
        listOfPosts: listOfPosts.sort(
          (first, second) => second.score - first.score
        ),
        isFetching: false
      });
    });
  }, [subreddit]);

  return (
    <PostsWrapper>
      {fetchedResults.isFetching ? (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      ) : (
        fetchedResults.listOfPosts.map((post) => {
          return (
            <SinglePost key={`${post.author}.${post.created}`} {...post} />
          );
        })
      )}
    </PostsWrapper>
  );
};

export default PostContainer;
