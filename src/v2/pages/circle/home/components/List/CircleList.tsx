import { ListComponent } from '../CircleListFrame';
import { CircleListCard } from './CircleListCard';

export const CircleList: ListComponent = ({ items }) => (
  <>
    {items.map(model => (
      <CircleListCard key={model.id} model={model} />
    ))}
  </>
);
