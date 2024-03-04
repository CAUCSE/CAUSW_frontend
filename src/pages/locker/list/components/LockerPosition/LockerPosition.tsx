import { observer } from 'mobx-react-lite';

import { Box, Title } from './styled';

export const LockerPosition: React.FC<{ model?: Model.LockerLocation }> = observer(({ model }) => {
  const expireYear: string | undefined = model?.expireAt.split('T')[0];
  const expireTime: string | undefined = model?.expireAt.split('T')[1];
  return model ? (
    <Box>
      <Title>보유중인 사물함</Title>
      {model.lockerNumber} 번 <br></br>
      마감기한 :{' '}
      {`${expireYear?.split('-')[0]}년 ${expireYear?.split('-')[1]}월 ${expireYear?.split(
        '-',
      )[2]}일 ${expireTime?.split(':')[0]}시 ${expireTime?.split(':')[1]}분`}
    </Box>
  ) : null;
});
