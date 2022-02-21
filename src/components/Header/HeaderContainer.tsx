import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';

import { BackButton } from './BackButton';
import { DefaultTop } from './DefaultTop';

import { DefaultLogo } from '@/assets';

interface Props {
  title?: string;
  withBack?: boolean | string;
  TopComponent?: React.ReactNode;
  RightComponent?: React.ReactNode | null;
  mini?: boolean;
}
export const HeaderContainer: React.FC<Props> = memo(
  ({
    withBack = false,
    TopComponent = <DefaultTop />,
    title = '',
    RightComponent = <DefaultLogo />,
    mini = false,
  }) => (
    <Wrapper mini={mini}>
      {withBack ? (
        <Left>
          <BackButton link={withBack} />
        </Left>
      ) : null}
      <Center>
        {!mini ? TopComponent : null}
        <Title mini={mini}>{title}</Title>
      </Center>
      <Right>{RightComponent}</Right>
    </Wrapper>
  ),
);

const Wrapper = styled.header<Pick<Props, 'mini'>>`
  display: flex;
  margin: ${({ mini }) => (mini ? null : '20px 0 10px')};
`;

const Left = styled.div`
  position: relative;
  width: 50px;
`;

const Center = styled.div`
  flex: 1 0 0;
  padding-left: 20px;
  overflow: hidden;

  ${Left} + & {
    padding-left: 0;
  }
`;

const Title = styled.h1<Pick<Props, 'mini'>>`
  font-weight: bold;
  word-break: break-all;

  ${({ mini }) =>
    mini
      ? css`
          margin: 15px 0 12px;
          font-size: 20px;
          line-height: 23px;
          text-align: center;
        `
      : css`
          margin: 5px 0 0;
          font-size: 24px;
          line-height: 28px;
        `}
`;

const Right = styled.div`
  position: relative;
  width: 50px;

  > img {
    margin-left: -20px;
  }
`;
