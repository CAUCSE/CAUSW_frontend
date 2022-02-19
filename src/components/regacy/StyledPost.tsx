import { memo } from 'react';
import styled, { css } from 'styled-components';

import { FlexBreak } from './atoms/Flex';
import { CommentBubbleIcon } from './atoms/Icon';

export const WrapperCSS = css`
  display: flex;
  flex-wrap: wrap;
`;

export const TitleCSS = css`
  flex: 1 1 0;
  margin: 0;
  font-weight: normal;
`;

export const CreatedDate = styled.div`
  width: 50px;
  text-align: right;
  font-size: 9px;
  line-height: 11px;
  color: #a3a1a1;
`;

export const Break = styled(FlexBreak)`
  margin-top: 0.25rem;
`;

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;

  > img {
    height: 100%;
    display: 100%;
  }
`;

export const AuthorNameCSS = css`
  flex: 1 1 0;

  ${ProfileImage} + & {
    margin-left: 0.35rem;
  }
`;

const CommentNumWrapper = styled.div`
  text-align: right;
  font-size: 10px;
  line-height: 12px;
  color: #518cff;
`;

const CommentNumIcon = styled(CommentBubbleIcon)`
  margin-right: 0.2rem;
`;

export const CommentNum: React.FC<{ num: number }> = memo(({ num }) => (
  <CommentNumWrapper>
    <CommentNumIcon /> {num}
  </CommentNumWrapper>
));
