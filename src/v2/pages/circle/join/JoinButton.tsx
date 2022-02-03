import { ClearButton } from '@/components/atoms/clear';
import styled from '@emotion/styled';

export const JoinButton: React.FC = () => {
  return (
    <>
      <Button>가입하기</Button>
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
