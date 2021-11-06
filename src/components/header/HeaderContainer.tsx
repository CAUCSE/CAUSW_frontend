import { memo } from 'react';
import styled from 'styled-components';
import { DefaultLogo } from './DefaultLogo';
import { DefaultTop } from './DefaultTop';

interface Props {
  title: string;
  withBack?: boolean;
  TopComponent?: React.FC;
  Logo?: React.FC;
}
export const HeaderContainer: React.FC<Props> = memo(
  ({ withBack = false, TopComponent = DefaultTop, title, Logo = DefaultLogo }) => (
    <Wrapper>
      {withBack ? <Left></Left> : null}
      <Center>
        <TopComponent />
        <Title>{title}</Title>
      </Center>
      {Logo ? (
        <Right>
          <Logo />
        </Right>
      ) : null}
    </Wrapper>
  ),
);

const Wrapper = styled.header`
  display: flex;
  margin: 20px 0;
  height: 50px;
`;

const Left = styled.div`
  flex-shrink: 0;
  width: 20px;
`;

const Center = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin: 5px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

const Right = styled.div`
  flex-shrink: 0;
  width: 50px;
`;
