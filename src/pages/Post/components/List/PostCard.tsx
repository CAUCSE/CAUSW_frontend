import { memo } from 'react';
import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';
import { ReactComponent as Icon } from '@/assets/icons/message.svg';

export const PostCard: React.FC<{ to: string; model: Model.Post }> = memo(
  ({ to, model: { title, content, numComment, formatedCreatedAt } }) => (
    <Link to={to}>
      <Card>
        <Title>{title}</Title>
        <Content className="text-ellipsis" dangerouslySetInnerHTML={{ __html: content }} />
        <Comment>
          {numComment ? (
            <>
              <Icon /> {numComment}
            </>
          ) : null}
        </Comment>
        <Date>{formatedCreatedAt}</Date>
      </Card>
    </Link>
  ),
);

const Link = styled(ClearLink)`
  display: block;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: 0;
  }
`;

const Card = styled.article`
  padding: 22.5px 0 10px;
  color: #3f4040;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 13px;
  line-height: 15px;
  font-weight: normal;
`;

const Content = styled.p`
  margin: 9px 0 0;
  max-height: 39px;
  -webkit-line-clamp: 3;
  font-size: 11px;
  line-height: 13px;

  > p {
    margin: 0;
  }
`;

const Comment = styled.div`
  margin-top: 2px;
  text-align: right;
  font-size: 8px;
  line-height: 9px;
  color: #518cff;
`;

const Date = styled.div`
  margin-top: 3px;
  text-align: right;
  font-size: 10px;
  line-height: 12px;
  color: #a3a1a1;
`;
