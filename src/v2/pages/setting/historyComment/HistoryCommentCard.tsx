import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import {
  ClearLink,
  PostAuthorNameCSS,
  PostBreak,
  PostCreatedAt as CreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
} from '@/v2/components';

export const HistoryCommentCard: React.FC<{ model: Model.HistoryComment }> = observer(
  ({ model: { to, content, formatedCreatedAt, circleName, boardName, postName } }) => (
    <Link to={to}>
      <Card>
        <Title>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </Title>
        <CreatedAt>{formatedCreatedAt}</CreatedAt>
        <PostBreak />
        <Breadcrumb>
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

  span {
    display: inline-block;

    &:after {
      content: '>';
      padding: 0 5px;
    }
  }
`;
