import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { generatePath } from 'react-router';

import { RemoveButton, Row } from './styled';

import { ClearLink } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const BoardListItem: React.FC<{ model: Model.Board }> = observer(({ model }) => {
  const { deleteBoardModal } = usePageUiStore<PageUiStore.BoardList>();

  const handleOpendeleteBoardModal = useCallback(
    (target: Model.Board) => () => {
      deleteBoardModal.open(target);
    },
    [],
  );

  return (
    <>
      <Row>
        <StyledLink to={generatePath(PAGE_URL.PostList, { boardId: model.id })}>
          {model.name}
        </StyledLink>
        <RemoveButton onClick={handleOpendeleteBoardModal(model)} />
      </Row>
    </>
  );
});

const StyledLink = styled(ClearLink)`
  float: left;
  font-size: 14px;
`;
