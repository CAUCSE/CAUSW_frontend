import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router';

import { ClearLink } from '@/components';
import { PAGE_URL } from '@/configs/path';

export const BoardListItem: React.FC<{ model: Model.Board }> = observer(
  ({ model: { id: boardId, name } }) => (
    <StyledLink to={generatePath(PAGE_URL.PostList, { boardId })}>{name}</StyledLink>
  ),
);

const StyledLink = styled(ClearLink)`
  float: left;
  clear: left;
  margin-top: 14px;
  font-size: 12px;
  line-height: 14px;
`;
