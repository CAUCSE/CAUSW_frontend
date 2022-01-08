import { useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/components/header';
import { JoinNav } from './JoinNav';

export const PageCircleJoin: React.FC = observer(() => {
  const { circleId } = useParams<{ circleId: string }>();
  const {
    ui: { setNav },
    circle: { fetch, circle },
  } = useRootStore();

  useLayoutEffect(() => {
    setNav(JoinNav);
    return () => setNav();
  }, []);

  useEffect(() => {
    fetch(circleId);
  }, [circleId]);

  return circle ? (
    <>
      <Header mini title="소모임 가입" withBack RightComponent={null} />
      <Name>{circle.name}</Name>
      {circle.mainImage ? <Image src={circle.mainImage} alt="circle main image" /> : null}

      <Row>소모임장 : {circle.leaderName}</Row>
      <Row>회원 수 : {circle.numMember}명</Row>
      <Row>생성일 : {/* circle.formatedCreatedAt */}</Row>
      <Hr />
      <Desc dangerouslySetInnerHTML={{ __html: circle.description }} />
    </>
  ) : null;
});

const Name = styled.h2`
  margin: 25px 0 18px;
  font-size: 18px;
  line-height: 21px;
`;

const Image = styled.img``;

const Row = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

const Hr = styled.hr`
  margin: 14px 0;
  border-width: 0 0 1px 0;
  border-bottom: 1px solid #f5f5f5;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 16px;
`;
