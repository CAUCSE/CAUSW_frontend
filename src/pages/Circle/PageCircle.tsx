import { useEffect } from 'react';
import { useRootStore } from '@/stores/RootStore';
import * as Circle from './Main/components';
import styled from 'styled-components';

export const PageCircle: React.FC = () => {
  const { circle } = useRootStore();

  useEffect(() => {
    circle.fetch();
  }, []);

  return (
    <>
      <Circle.SearchBar />
      <H2>컴공 소모임</H2>
      <Circle.ListFrame items={[1, 2, 3]} emptyText={'아직 등록된 소모임이 없어요!'} ListComponent={Circle.Slider} />
      <H2>내 소모임</H2>
      <Circle.ListFrame items={[]} emptyText={'아직 가입한 소모임이 없어요!'} ListComponent={Circle.Slider} />
    </>
  );
};

const H2 = styled.h2`
  margin: 30px 0;
  font-size: 18px;
  line-height: 21px;
`;
