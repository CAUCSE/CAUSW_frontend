import { observer } from 'mobx-react-lite';

import { LocationCell } from './LocationCell';
import { Gird, Legend, LegendBox, ScrollArea, Wrapper } from './styled';

import { usePageUiStore } from '@/hooks';

export const LocationGrid: React.FC = observer(() => {
  const { locations } = usePageUiStore<PageUiStore.LockerLocations>();

  return (
    <Wrapper>
      <Legend>
        <div>
          <LegendBox isActive />
          선택 가능
        </div>
        <div>
          <LegendBox /> 선택 불가
        </div>
        <div>
          <LegendBox isMine /> 내 사물함
        </div>
      </Legend>
      <ScrollArea>
        <Gird>
          {locations.map(location => (
            <LocationCell key={location.id} model={location} />
          ))}
        </Gird>
      </ScrollArea>
    </Wrapper>
  );
});
