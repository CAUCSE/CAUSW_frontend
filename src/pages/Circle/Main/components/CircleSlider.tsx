import { observer } from 'mobx-react-lite';
import { ListComponent } from './CircleListFrame';
import { CircleSlideCard } from './CircleSlideCard';

export const CircleSlider: ListComponent = observer(() => {
  return (
    <>
      <CircleSlideCard />
    </>
  );
});
