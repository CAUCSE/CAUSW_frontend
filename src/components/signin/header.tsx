import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Back from '../../assets/icons/Left.png';

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 67px;
  left: 0px;
  top: 0px;

  display: flex;
  align-items: center;

  background: #ffffff;
`;

const Image = styled.img`
  margin-left: 20px;
  width: 20px;
  height: 20px;
`;
Image.defaultProps = {
  src: Back,
};

const Title = styled.div`
  width: 80%;

  font-size: 20px;
  line-height: 23px;

  align-items: center;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #3f4040;
`;

export const Header: React.FC = React.memo(() => (
  <Wrapper>
    <Link to="/">
      <Image />
    </Link>
    <Title> 회원가입 </Title>
  </Wrapper>
));
