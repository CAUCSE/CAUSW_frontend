import styled from '@emotion/styled';

import { CircleListCard } from './CircleListCard';
import { ListComponent } from '../CircleListFrame';

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
