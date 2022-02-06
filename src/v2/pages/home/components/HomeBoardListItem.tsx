import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router';

import { PAGE_URL } from '@/configs/path';
import {
  ClearLink,
  PostAuthorNameCSS,
  PostBreak,
  PostCommentNum,
  PostCreatedAt,
  PostTitleCSS,
  PostWrapperCSS,
  useGetBoardId,
} from '@/v2/components';

export const HomeBoardListItem: React.FC<{ model: Model.Post }> = observer(
  ({ model: { id: postId, title, formatedCreatedAt, author, commentCount } }) => {
    const boardId = useGetBoardId();

    return (
      <Link to={generatePath(PAGE_URL.PostDetail, { boardId, postId })}>
        <Title>{title}</Title>
        <PostCreatedAt>{formatedCreatedAt}</PostCreatedAt>
        <PostBreak />
        <AuthorName>{author.nameWithAdmission}</AuthorName>
        <PostCommentNum num={commentCount} />
      </Link>
    );
  },
);

const Link = styled(ClearLink)`
  ${PostWrapperCSS}
  margin: 16px 0 0;
`;

const Title = styled.h3`
  ${PostTitleCSS}
  font-size: 12px;
  line-height: 14px;
`;

const AuthorName = styled.div`
  ${PostAuthorNameCSS}
  font-size: 9px;
  line-height: 11px;
`;
