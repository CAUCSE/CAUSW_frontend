import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';

import { JoinButton } from './JoinButton';
import { JoinStoreProvider } from './JoinStore';
import { PageSkeleton } from './PageSkeleton';
import * as S from './styled';

import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/v2/components';
import { useInitPage } from '@/v2/hooks/useInitPage';

export const PageCircleJoin: React.FC = observer(() => {
  const { circleId } = useParams<{ circleId: string }>();
  const {
    circle: { fetch, reset, circle },
  } = useRootStore();

  useInitPage({
    Nav: JoinButton,
    effect: () => {
      fetch(circleId);
      return () => reset();
    },
    deps: [circleId],
  });

  return (
    <JoinStoreProvider>
      <Header mini title="소모임 가입" withBack RightComponent={null} />
      {circle ? (
        <>
          <S.Name>{circle.name}</S.Name>
          {circle.mainImage ? <S.Image src={circle.mainImage} alt="circle main image" /> : null}
          <S.Row>회원 수 : {circle.numMember}명</S.Row>
          <S.Row>소모임장 : {circle.leaderName}</S.Row>
          <S.Row>생성일 : {circle.formatedCreatedAt}</S.Row>

          <S.Hr />
          <S.Desc dangerouslySetInnerHTML={{ __html: circle.description }} />
        </>
      ) : (
        <PageSkeleton />
      )}
    </JoinStoreProvider>
  );
});
