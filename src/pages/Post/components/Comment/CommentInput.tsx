import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { ClearButton } from '@/components/atoms/clear';
import { useRootStore } from '@/stores/RootStore';
import { CommentForm } from './CommentForm';

export const CommentInput: React.FC = observer(() => {
  const {
    ui: {
      commentUi: { isReply, isEdit, target, resetState },
    },
  } = useRootStore();

  useEffect(() => {
    return () => resetState();
  }, [resetState]);

  // TODO: 컴포넌트 분리
  return (
    <Wrapper>
      {/* 타겟 컴포넌트 */}
      {isReply ? (
        <Chip reply onClick={resetState}>
          답글 작성: {target?.author.nameWithAdmission}
        </Chip>
      ) : null}
      {isEdit ? (
        <Chip edit onClick={resetState}>
          댓글 수정: {target?.author.nameWithAdmission}
        </Chip>
      ) : null}
      <CommentForm />
    </Wrapper>
  );
});

const Wrapper = styled.nav`
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 25%);
`;

const Chip = styled(ClearButton)<{ reply?: boolean; edit?: boolean }>`
  position: relative;
  margin: 6px 8px 4px;
  padding: 0 1.3rem 0 0.5rem;
  height: 1.25rem;
  border-radius: 30px;
  font-size: 9px;
  line-height: 11px;
  background: ${({ reply, edit }) => {
    if (reply) return 'rgba(255, 202, 202, 0.94)';
    else if (edit) return 'rgba(255, 234, 202, 0.94)';

    return null;
  }};

  :after {
    position: absolute;
    right: 0.5rem;
    content: 'X';
  }
`;
