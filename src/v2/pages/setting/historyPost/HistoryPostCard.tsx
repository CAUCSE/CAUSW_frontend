import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import {
  ClearLink,
  PostAuthorNameCSS,
  PostBreak,
  PostCommentNum,
  PostCreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
} from '@/v2/components';

interface Props {
  model: Model.HistoryPost;
}
export const HistoryPostCard: React.FC<Props> = observer(
  ({ model: { boardId, id: postId, title, formatedCreatedAt, circleName, boardName, numComment } }) => (
    <Link to={generatePath(PAGE_URL.PostDetail, { boardId, postId })}>
      <Card>
        <Title>{title}</Title>
        <PostCreatedAt>{formatedCreatedAt}</PostCreatedAt>
        <PostBreak />
        <Breadcrumb>
          {circleName ? <span>{circleName}</span> : null}
          {boardName}
        </Breadcrumb>
        <PostCommentNum>{numComment}</PostCommentNum>
      </Card>
    </Link>
  ),
);

const Link = styled(ClearLink)`
  display: block;
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

const Breadcrumb = styled.div`
  ${PostAuthorNameCSS}
  font-size: 10px;
  line-height: 12px;

  > span {
    display: inline-block;

    &:after {
      content: '>';
      padding: 0 5px;
    }
  }
`;
