import styled from '@emotion/styled';
import { memo } from 'react';
import { generatePath } from 'react-router';

import { ClearLink } from '@/components';
import { PAGE_URL } from '@/configs/path';

interface Props {
  boardId?: string;
  boardName?: string;
}

export const Breadcrumb: React.FC<Props> = memo(({ boardId = ' ', boardName = ' ' }) => (
  <Wrapper>
    <ClearLink to={generatePath(PAGE_URL.PostList, { boardId })}>{boardName}</ClearLink>
  </Wrapper>
));

const Wrapper = styled.div`
  height: 12px;
  font-size: 10px;
  line-height: 12px;
`;
