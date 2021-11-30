import { generatePath } from 'react-router';
import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ClearLink } from '@/components/atoms/clear';

export const Breadcrumb = observer(() => {
  const {
    post: { boardId, boardName },
  } = useRootStore();
  const postUrl = computed(() => (boardId ? generatePath(PAGE_URL.Post, { boardId }) : '')).get();

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
