import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ClearButton } from '@/components/atoms/clear';
import { SendIcon } from '@/components/atoms/Icon';
import { memo } from 'react';

export const CommentInput: React.FC = memo(() => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea rows={1} placeholder="댓글 내용 입력" {...register('content', { required: true })} />
        <SendButton>
          <Icon />
        </SendButton>
      </form>
    </Wrapper>
  );
});

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

const Icon = styled(SendIcon)``;
