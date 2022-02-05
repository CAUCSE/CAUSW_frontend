import { memo } from 'react';
import { generatePath } from 'react-router';
import styled from 'styled-components';

import { ClearLink } from '@/components/atoms/clear';
import * as Post from '@/components/StyledPost';
import { PAGE_URL } from '@/configs/path';

export const HomeBoardListItem: React.FC<{ model: Model.Post }> = memo(
  ({ model: { id, title, formatedCreatedAt, author, commentCount } }) => (
    <Link to={generatePath(PAGE_URL.PostDetail, { postId: id })}>
      <Title>{title}</Title>
      <Post.CreatedDate>{formatedCreatedAt}</Post.CreatedDate>
      <Post.Break />
      <AuthorName>{author.nameWithAdmission}</AuthorName>
      <Post.CommentNum num={commentCount} />
    </Link>
  ),
);

const Link = styled(ClearLink)`
  ${Post.WrapperCSS}
  margin: 16px 0 0;
`;

const Title = styled.h3`
  ${Post.TitleCSS}
  font-size: 12px;
  line-height: 14px;
`;

const AuthorName = styled.div`
  ${Post.AuthorNameCSS}
  font-size: 9px;
  line-height: 11px;
`;
