import { observer } from 'mobx-react-lite';

import { LocationCell } from './LocationCell';
import { Gird } from './styled';

import { usePageUiStore } from '@/hooks';

export const LocationGrid: React.FC = observer(() => {
  const { locations } = usePageUiStore<PageUiStore.LockerLocations>();

  return (
    <div>
      <Gird>
        {locations.map(location => (
          <LocationCell key={location.id} model={location} />
        ))}
      </Gird>
      <div>
        <div>
          <div />
          선택 가능
        </div>
        <div>
          <div /> 선택 불가
        </div>
        <div>
          <div /> 내 사물함
        </div>
      </div>
    </div>
  );
});
