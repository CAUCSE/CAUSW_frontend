import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { createContext, memo, useContext } from 'react';

import CommentBubbleIcon from '@/assets/icons/comment_bubble.svg?react';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const PostWrapperCSS = css`
  display: flex;
  flex-wrap: wrap;
`;

export const PostTitleCSS = css`
  flex: 1 1 0;
  margin: 0;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PostProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const PostCouncilProfileImage = styled(PostProfileImage)`
  border: 2px solid #312ed7;
`;

export const PostStudentLeaderProfileImage = styled(PostProfileImage)`
  border: 2px solid #ff9100;
`;

export const PostAuthorNameCSS = css`
  flex: 1 1 0;

  ${PostProfileImage} + & {
    margin-left: 0.35rem;
  }
`;

export const PostCreatedAt = styled.div`
  width: 50px;
  text-align: right;
  font-size: 9px;
  line-height: 11px;
  color: #a3a1a1;
`;

export const PostBreak = styled.hr`
  margin: 0.25rem 0 0;
  flex-basis: 100%;
  height: 0;
  border: 0;
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

export const PostCommentNum: React.FC = memo(({ children }) => (
  <CommentNumWrapper>
    <CommentNumIcon /> {children}
  </CommentNumWrapper>
));

const BoradIdContext = createContext('');
export const BoradIdProvider: React.FC<{ value: string }> = ({ value, children }) => (
  <BoradIdContext.Provider value={value}>{children}</BoradIdContext.Provider>
);
export const useGetBoardId = (): string => useContext(BoradIdContext);
