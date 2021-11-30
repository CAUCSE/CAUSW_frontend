import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ClearButton } from '@/components/atoms/clear';
import { SendIcon } from '@/components/atoms/Icon';
import { useRootStore } from '@/stores/RootStore';
import { observer } from 'mobx-react-lite';

export const CommentInput: React.FC = observer(() => {
  const {
    ui: {
      commentUi: { isReply, isEdit, target, resetState },
    },
  } = useRootStore();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
      {/* 인풋 컴포넌트 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea rows={1} placeholder="댓글 내용 입력" {...register('content', { required: true })} />
        <SendButton>
          <SendIcon />
        </SendButton>
      </form>
    </Wrapper>
  );
});

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

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 57px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 25%);

  > form {
    display: flex;
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  flex: 1 1 0;
  margin: 5px 0 5px 8px;
  padding: 17px;
  background: #f3f3f3;
  border: 0;
  border-radius: 15px;
  resize: none;
  font-size: 13px;
  line-height: 15px;

  &::placeholder {
    color: '#BDBDBD';
  }
`;

const SendButton = styled(ClearButton)`
  width: 50px;
`;
