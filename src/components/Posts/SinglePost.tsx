import React from 'react';
import styled from 'styled-components';

type OwnProps = {
  title: string;
  score: number;
  author: string;
  commentsNum: number;
  created: number;
};

type Props = OwnProps;

type RowStyles = {
  flexDirection: 'row' | 'column';
  alignItems: 'center' | 'start';
};

type Width = {
  width: string;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${(props: RowStyles) => props.flexDirection};
  align-items: ${(props: RowStyles) => props.alignItems};
  justify-content: space-around;
`;

const Col = styled.div`
  width: ${(props: Width) => props.width}
`;

const Score = styled.div`
  font-size: 36px;
  color: #afb3b9;
  font-family: Roboto;
  text-align: center;
`;

const Title = styled.div`
  color: #fff;
  font-size: 18px;
  font-family: Roboto;
  padding: .5rem 0;
`;

const Author = styled.div`
  color: #afb3b9;
  font-size: 16px;
  font-family: Roboto;
  padding: .5rem 0;
`;

const CommentsNum = styled.div`
  color: white;
  font-size: 12px;
  font-family: Roboto;
`;

const SinglePost = (props: Props) => {
  const { title, score, author, commentsNum, created } = props;
  return (
    <Wrapper>
      <Row flexDirection="row" alignItems="center">
        <Col width="15%">
          <Score>{score}</Score>
        </Col>
        <Col width="80%">
          <Row flexDirection="column" alignItems="start">
            <Title>{title}</Title>
            <Author>Author: {author}</Author>
            <CommentsNum>{commentsNum} comments</CommentsNum>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SinglePost;
