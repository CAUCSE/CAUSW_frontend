import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { generatePath } from 'react-router';

import { RemoveButton, Row } from './styled';

import { ClearLink } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

export const BoardListItem: React.FC<{ model: Model.Board }> = observer(({ model }) => {
  const { deleteBoardModal } = usePageUiStore<PageUiStore.BoardList>();
  const {
    auth: { me },
  } = useRootStore();

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
        {me?.isPresident ||
        me?.isAdmin ||
        (me?.isCircleLeader &&
          model.circleId &&
          me.circleIds?.find(circleId => circleId === model.circleId)) ? (
          <RemoveButton onClick={handleOpendeleteBoardModal(model)} />
        ) : null}
      </Row>
    </>
  );
});

const StyledLink = styled(ClearLink)`
  float: left;
  font-size: 14px;
`;
