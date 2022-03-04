import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router';

import { PageUiStoreImpl } from './CircleJoinPageUiStore';
import { CircleJoinModal, PageSkeleton } from './components';
import { CircleImage, Desc, Hr, Name, Row } from './styled';

import { BodyScreen, Header, PageBody, PageFooter, PageStoreHOC, NavButton } from '@/components';
import { usePageUiStore } from '@/hooks';

const CircleJoinPage: React.FC = observer(() => {
  const { circleId } = useParams<{ circleId: string }>();
  const {
    fetch,
    reset,
    circle,
    joinModal: { open },
  } = usePageUiStore<PageUiStore.CircleJoin>();
  const handleOpenJoinModal = useCallback(() => open(circle), [circle]);

  useEffect(() => {
    fetch(circleId);
    return () => reset();
  }, [circleId]);

  return (
    <>
      <Header mini title="소모임 가입" withBack RightComponent={null} />
      <PageBody>
        <BodyScreen>
          {circle ? (
            <>
              <Name>{circle.name}</Name>
              {circle.mainImage ? (
                <CircleImage src={circle.mainImage} alt="circle main image" />
              ) : null}
              <Row>회원 수 : {circle.numMember}명</Row>
              <Row>소모임장 : {circle.leaderName}</Row>
              <Row>생성일 : {circle.formatedCreatedAt}</Row>
              <Hr />
              <Desc dangerouslySetInnerHTML={{ __html: circle.newLineDescription }} />
            </>
          ) : (
            <PageSkeleton />
          )}
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <NavButton onClick={handleOpenJoinModal}>가입하기</NavButton>
      </PageFooter>
      <CircleJoinModal />
    </>
  );
});

export default PageStoreHOC(<CircleJoinPage />, { store: PageUiStoreImpl });
