import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { ClearLink } from '@/components/atoms/clear';
import { generatePath } from 'react-router';
import { PAGE_URL } from '@/configs/path';

export const PostCreateButton: React.FC = observer(() => {
  const {
    post: { boardId, writable },
  } = useRootStore();

  return writable ? (
    <WriteButton to={generatePath(PAGE_URL.PostWrite, { boardId })}>
      <img src="/images/icons/pencil.svg" alt="Pencil icon" />
    </WriteButton>
  ) : null;
});

const WriteButton = styled(ClearLink)`
  position: relative;
  display: block;
  margin-right: -20px;
  width: 50px;
  height: 50px;

  > img {
    position: absolute;
    top: 14px;
    right: 20px;
  }
`;
