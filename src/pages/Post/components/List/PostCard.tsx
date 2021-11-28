import { memo } from 'react';
import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';
import { ReactComponent as Icon } from '@/assets/icons/message.svg';

export const PostCard: React.FC<{ to: string; model: Model.Post }> = memo(
  ({ to, model: { title, author, numComment, formatedCreatedAt } }) => (
    <Link to={to}>
      <Card>
        <Title>{title}</Title>
        <Date>{formatedCreatedAt}</Date>
        <AuthorName>{author.nameWithAdmission}</AuthorName>
        <Comment>
          {numComment ? (
            <>
              <Icon /> {numComment}
            </>
          ) : null}
        </Comment>
      </Card>
    </Link>
  ),
);

const Link = styled(ClearLink)`
  display: block;
  border-bottom: 1px solid #f5f5f5;
`;

const Card = styled.article`
  overflow: hidden;
  padding: 1rem 0 0.75rem;
  color: #3f4040;
`;

const Title = styled.h3`
  float: left;
  margin: 0;
  width: calc(100% - 50px);
  font-size: 13px;
  line-height: 15px;
  font-weight: normal;
`;

const Date = styled.div`
  float: right;
  width: 50px;
  text-align: right;
  font-size: 10px;
  line-height: 12px;
  color: #a3a1a1;
`;

const AuthorName = styled.div`
  clear: both;
  float: left;
  margin-top: 0.75rem;
  font-size: 10px;
  line-height: 12px;
`;

const Comment = styled.div`
  float: right;
  text-align: right;
  margin-top: 0.75rem;
  font-size: 8px;
  line-height: 9px;
  color: #518cff;
`;
