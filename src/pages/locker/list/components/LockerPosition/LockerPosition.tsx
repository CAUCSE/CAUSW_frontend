import { observer } from 'mobx-react-lite';

import { Box, Title } from './styled';

export const LockerPosition: React.FC<{ model?: Model.LockerLocation }> = observer(({ model }) => (
  <Box>
    <Title>보유중인 사물함</Title>
    {model?.lockerLocationName} {model?.lockerNumber}번
  </Box>
));
