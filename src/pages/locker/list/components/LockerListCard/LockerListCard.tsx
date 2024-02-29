import { useEffect, useState } from 'react';

import { Bar, Card, Desc, Name, Status } from './styled';

export const LockerListCard: React.FC<{ model: Model.Locker }> = ({
  model: { to, name, enableLockerCount, totalLockerCount },
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress((enableLockerCount / totalLockerCount) * 100), 250);
  }, []);

  return (
    <Card to={to}>
      <Name>{name}</Name>
      {/* <Desc>{description}</Desc> */}
      <Bar variant="determinate" value={progress} />
      <Status>
        잔여 {enableLockerCount} / 전체 {totalLockerCount}
      </Status>
    </Card>
  );
};
