import { memo } from 'react';
import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';
import * as Post from '@/components/StyledPost';

export const PostCard: React.FC<{ to: string; model: Model.Post }> = memo(
  ({ to, model: { title, author, numComment, formatedCreatedAt } }) => (
    <Link to={to}>
      <Card>
        <Title>{title}</Title>
        <Post.CreatedDate>{formatedCreatedAt}</Post.CreatedDate>
        <Post.Break />
        <AuthorName>{author.nameWithAdmission}</AuthorName>
        <Post.CommentNum num={numComment} />
      </Card>
    </Link>
  ),
);

const Link = styled(ClearLink)`
  display: block;
  border-bottom: 1px solid #f5f5f5;
`;

const Card = styled.article`
  ${Post.WrapperCSS}
  padding: 1rem 0 0.75rem;
`;

const Title = styled.h3`
  ${Post.TitleCSS}
  font-size: 13px;
  line-height: 15px;
`;

const AuthorName = styled.div`
  ${Post.AuthorNameCSS}
  font-size: 10px;
  line-height: 12px;
`;
