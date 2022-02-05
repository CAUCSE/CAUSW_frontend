import { ClearButton } from '@/components/atoms/clear';
import styled from '@emotion/styled';
import { JoinModal } from './JoinModal';
import { useJoinStore } from './JoinStore';

export const JoinButton: React.FC = () => {
  const { setVisible } = useJoinStore();

  return (
    <>
      <Button onClick={() => setVisible(true)}>가입하기</Button>
      <JoinModal />
    </>
  );
};

const Button = styled(ClearButton)`
  margin: 20px;
  height: 45px;
  background: #312ed7;
  border-radius: 30px;
  font-size: 21px;
  color: #fff;
`;
