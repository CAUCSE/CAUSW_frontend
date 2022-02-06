import styled from '@emotion/styled';
import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ClearLink } from '@/v2/components';

export const Breadcrumb = observer(() => {
  const {
    post: { boardId, boardName },
  } = useRootStore();
  const postUrl = computed(() => (boardId ? generatePath(PAGE_URL.PostList, { boardId }) : '')).get();

  return (
    <Wrapper>
      <ClearLink to={postUrl}>{boardName}</ClearLink>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  font-size: 10px;
  line-height: 12px;

  ${ClearLink} {
    &:after {
      content: ' >';
    }
  }
`;
