import styled from '@emotion/styled';
import { memo } from 'react';

import {
  ClearLink,
  PostAuthorNameCSS,
  PostBreak,
  PostCommentNum,
  PostCreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
} from '@/components';

export const PostCard: React.FC<{ to: string; model: Model.Post }> = memo(
  ({ to, model: { title, author, commentCount, formatedCreatedAt } }) => (
    <Link to={to}>
      <Card>
        <Title>{title}</Title>
        <PostCreatedAt>{formatedCreatedAt}</PostCreatedAt>
        <PostBreak />
        <AuthorName>{author.nameWithAdmission}</AuthorName>
        <PostCommentNum>{commentCount}</PostCommentNum>
      </Card>
    </Link>
  ),
);

const Link = styled(ClearLink)`
  display: block;
  margin: 0 20px;
  border-bottom: 1px solid #f5f5f5;
`;

const Card = styled.article`
  ${PostWrapperCSS}
  padding: 1rem 0 0.75rem;
`;

const Title = styled.h3`
  ${PostTitleCSS}
  font-size: 13px;
  line-height: 15px;
`;

const AuthorName = styled.div`
  ${PostAuthorNameCSS}
  font-size: 10px;
  line-height: 12px;
`;
