import styled from 'styled-components';
import { ClearButton } from '@/components/atoms/clear';
import { useRootStore } from '@/stores/RootStore';

export const JoinNav: React.FC = () => {
  const {
    circle: { join },
  } = useRootStore();
  return <Button>가입하기</Button>;
};

const Button = styled(ClearButton)`
  margin: 20px;
  height: 45px;
  background: #312ed7;
  border-radius: 30px;
  font-size: 21px;
  color: #fff;
`;
