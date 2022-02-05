import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { CircleBoards, CircleMainMenu } from './components';

import { Header } from '@/components/header';
import { useRootStore } from '@/stores/RootStore';
import { useInitPage } from '@/v2/hooks';

export const PageCircleMain: React.FC = observer(() => {
  const { circleId } = useParams<{ circleId: string }>();
  const {
    circle: { fetchMain, reset, circle },
  } = useRootStore();

  useInitPage({
    effect: () => {
      fetchMain(circleId);
      return () => reset();
    },
    deps: [circleId],
  });

  return (  
    <>
      <Header mini title={circle?.name} withBack RightComponent={CircleMainMenu} />
      {circle?.mainImage ? <CircleImage src={circle.mainImage} /> : null}
      <CircleBoards />
    </>
  );
});

const CircleImage = styled.div<{ src: string }>`
  margin: 22px 0;
  padding-bottom: 56.25%;
  width: 100%;
  border-radius: 5px;
  background: center / contain no-repeat url(${({ src }) => src});
  background-color: #efefef;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
`;
