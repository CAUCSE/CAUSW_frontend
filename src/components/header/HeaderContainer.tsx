import { memo } from 'react';
import styled from 'styled-components';
import { DefaultLogo } from './DefaultLogo';
import { DefaultTop } from './DefaultTop';
import { BackButton } from './BackButton';

interface Props {
  title: string;
  withBack?: boolean | string;
  TopComponent?: React.FC;
  RightComponent?: React.FC;
}
export const HeaderContainer: React.FC<Props> = memo(
  ({ withBack = false, TopComponent = DefaultTop, title, RightComponent = DefaultLogo }) => (
    <Wrapper>
      {withBack ? (
        <Left>
          <BackButton link={withBack} />
        </Left>
      ) : null}
      <Center>
        <TopComponent />
        <Title>{title}</Title>
      </Center>
      {RightComponent ? (
        <Right>
          <RightComponent />
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
  width: 30px;
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
  position: relative;
  flex-shrink: 0;
  width: 50px;
`;
