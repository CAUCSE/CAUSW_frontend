import { LogoImage } from '@/components/atoms/Logo';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <h1>
        <LogoImage />
        동문네트워크
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  margin: 20px 0;
  width: 100%;

  h1 {
    margin: 0;
    text-align: center;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    color: #a3a1a1;

    ${LogoImage} {
      display: block;
      margin: 0 auto;
      width: 55px;
      height: 55px;
    }
  }
`;
