import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { ListComponent } from '../CircleListFrame';
import { CircleSlideCard } from '../Slider/CircleSlideCard';

export const CircleWebSlider: ListComponent = observer(({ items }) => {
  return (
    <WebScrollWrapper>
      {items.map(item => (
        <CircleSlideCard key={item.id} model={item} />
      ))}
    </WebScrollWrapper>
  );
});

const WebScrollWrapper = styled.div`
  display: flex;
  gap: 20px;
  height: 400px;
  overflow-x: auto;
`;
