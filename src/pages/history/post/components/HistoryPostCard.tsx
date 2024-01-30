import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import {
  ClearLink,
  PostAuthorNameCSS,
  PostBreak,
  PostCommentNum,
  PostCreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
} from '@/components';

export const HistoryPostCard: React.FC<{
  model: Model.HistoryPost;
}> = observer(({ model: { to, title, formatedCreatedAt, circleName, boardName, numComment } }) => (
  <Link to={to}>
    <Card>
      <Title>{title}</Title>
      <PostCreatedAt>{formatedCreatedAt}</PostCreatedAt>
      <PostBreak />
      <Breadcrumb className="text-ellipsis">
        {circleName ? <span>{circleName}</span> : null}
        {boardName}
      </Breadcrumb>
      <PostCommentNum>{numComment}</PostCommentNum>
    </Card>
  </Link>
));

const Link = styled(ClearLink)`
  display: block;
  padding: 0 20px;
`;

const Card = styled.article`
  ${PostWrapperCSS}
  padding: 1rem 0 0.75rem;
  border-bottom: 1px solid #d2d2d2;
`;

const Title = styled.h3`
  ${PostTitleCSS}
  font-size: 13px;
  line-height: 15px;
`;

const Breadcrumb = styled.div`
  ${PostAuthorNameCSS}
  padding-right: 1px;
  -webkit-line-clamp: 1;
  font-size: 10px;
  line-height: 14px;

  span {
    display: inline-block;

    &:after {
      content: '>';
      padding: 0 5px;
    }
  }
`;
