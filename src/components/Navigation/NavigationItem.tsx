import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  selected: boolean;
};

type StyledProps = {
  selected: boolean;
};

const Wrapper = styled.div`
  color: #fff;
  padding: 15px;
  font-size: 16px;
  font-family: Roboto;
  background-color: ${(props: StyledProps) =>
    props.selected ? '#9061b2' : 'transparent'};
`;

const NavigationItem = (props: Props) => {
  const { text, selected } = props;
  return <Wrapper selected={selected}>{text.toUpperCase()}</Wrapper>;
};

NavigationItem.defaultProps = {
  selected: false
};

export default NavigationItem;
