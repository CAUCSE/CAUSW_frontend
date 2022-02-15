import styled from '@emotion/styled';

import { ListComponent } from '../CircleListFrame';
import { CircleListCard } from './CircleListCard';

export const CircleList: ListComponent = ({ items }) => (
  <Wrapper>
    {items.map(model => (
      <CircleListCard key={model.id} model={model} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
