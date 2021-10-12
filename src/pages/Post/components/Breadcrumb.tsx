import { generatePath } from 'react-router';
import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ClearLink } from '@/components/atoms/clear';

export const Breadcrumb = observer(() => {
  const {
    board: { boardName, boardId },
  } = useRootStore();
  const postUrl = computed(() => generatePath(PAGE_URL.Post, { boardId })).get();

  return (
    <Wrapper>
      <ClearLink to={postUrl}>{boardName}</ClearLink>
    </Wrapper>
  );
});

const Wrapper = styled.h2`
  margin: 14px 0;
  font-size: 10px;
  font-weight: normal;
  line-height: 12px;

  ${ClearLink} {
    &:after {
      content: ' >';
    }
  }
`;
