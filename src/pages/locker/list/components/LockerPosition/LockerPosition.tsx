import { observer } from 'mobx-react-lite';

import { Box, Title } from './styled';

export const LockerPosition: React.FC<{ model?: Model.LockerLocation }> = observer(({ model }) =>
  model ? (
    <Box>
      <Title>보유중인 사물함</Title>
      {model.lockerNumber} 번 <br></br>
      마감기한 : {model.expireAt}
    </Box>
  ) : null,
);
