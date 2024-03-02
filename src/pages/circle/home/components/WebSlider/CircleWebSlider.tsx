import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { CircleWebSlideCard } from './CircleWebSlideCard';
import { ListComponent } from '../CircleListFrame';

export const CircleWebSlider: ListComponent = observer(({ items }) => {
  return (
    <WebScrollWrapper>
      {items.map(item => (
        <CircleWebSlideCard key={item.id} model={item} />
      ))}
    </WebScrollWrapper>
  );
});

const WebScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0px;
`;
