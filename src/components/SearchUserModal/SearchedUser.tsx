import { observer } from 'mobx-react-lite';

import { WithSearchUserModalUi } from './SearchUserModalUi';
import { Desc, Guide, Title } from './styled';

import { usePageUiStore } from '@/hooks';

export const SearchedUser: React.FC<{ guide?: string }> = observer(({ guide }) => {
  const { target } = usePageUiStore<WithSearchUserModalUi>();

  return target ? (
    <>
      <Title>유저 검색 결과</Title>
      <Desc>
        이름 : {target.name}
        <br />
        {target.studentId ? (
          <>
            학번 : {target.studentId}
            <br />
          </>
        ) : null}
        이름 : {target.email}
      </Desc>
    </>
  ) : (
    <Guide>{guide ?? '권한을 위임할 유저를 검색해주세요.'}</Guide>
  );
});
