import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { InputState } from '../CommentInput';

import { ClearButton, ClearUl, PostAuthorNameCSS, PostWrapperCSS } from '@/components';

export const CommentsBox = styled(ClearUl)`
  margin: 10px 0;
  padding: 10px 0;
  border-top: 1px solid #f5f5f5;

  li {
    position: relative;
    padding-bottom: 5px;
  }
`;

export const CommentCard = styled.div<{ state: InputState }>`
  flex: 1 0 0;
  position: relative;
  padding: 7px 10px;

  border-radius: 10px;
  background: ${({ state }) => {
    if (state === InputState.REPLY) return '#FFCACA';
    else if (state === InputState.EDIT) return '#FFEACA';
    else return '#F5F5F5';
  }};
  user-select: none;
`;

export const Profile = styled.div`
  ${PostWrapperCSS}
  align-items: center;
  font-size: 10px;
  line-height: 12px;
`;

export const AuthorName = styled.div`
  ${PostAuthorNameCSS}
  font-size: 10px;
  line-height: 12px;
`;

export const Content = styled.p<{ tagUserName: string | null }>`
  margin: 0.5rem 0;
  width: 100%;
  font-size: 13px;
  line-height: 18px;
  word-break: break-all;

  ${({ tagUserName }) =>
    tagUserName &&
    css`
      &:before {
        content: '@${tagUserName}';
        padding-right: 5px;
        font-weight: bold;
      }
    `}

  p {
    margin: 0;
  }
`;

export const ReplyLink = styled(ClearButton)`
  padding-left: 5px;
  font-size: 11px;
  line-height: 13px;
`;

export const ReplyCommentsBox = styled(ClearUl)`
  // margin-top: 10px;
  // padding: 5px -0;
  // border-top: 1px solid #f5f5f5;
`;

export const BackLink = styled(ClearButton)`
  padding: 5px 4px;
  font-size: 11px;
  line-height: 13px;
`;

export const Li = styled.li`
  padding-left: 15px;
`;
