import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import {
  ClearLink,
  PostBreak,
  PostCreatedAt as CreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
} from '@/components';

export const HistoryCommentCard: React.FC<{ model: Model.HistoryComment }> = observer(
  ({ model: { to, content, formatedCreatedAt, circleName, boardName, postName } }) => (
    <Link to={to}>
      <Card>
        <Title>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </Title>
        <CreatedAt>{formatedCreatedAt}</CreatedAt>
        <PostBreak />
        <Breadcrumb className="text-ellipsis">
          {circleName ? <span>{circleName}</span> : null}
          <span>{boardName}</span>
          {postName}
        </Breadcrumb>
      </Card>
    </Link>
  ),
);

const Link = styled(ClearLink)`
  display: block;
  padding: 0 20px;
`;

const Card = styled.article`
  ${PostWrapperCSS}
  padding: 1rem 0 0.75rem;
  border-bottom: 1px solid #f5f5f5;
`;

const Title = styled.h3`
  ${PostTitleCSS}
  font-size: 13px;
  line-height: 15px;
`;

const Breadcrumb = styled.div`
  -webkit-line-clamp: 1;
  font-size: 10px;
  line-height: 12px;

  span {
    display: inline-block;

    &:after {
      content: '>';
      padding: 0 5px;
    }
  }
`;
