import { Card, Text } from './styled';

export const PageSkeleton: React.FC = () => (
  <div style={{ padding: '0 20px' }}>
    {Array.from({ length: 20 }).map((value, index) => (
      <Card key={index}>
        <Text width={'100%'} height={20} />
        <Text width={'65%'} height={15} />
        <Text width={'25%'} height={0} />
        <Text width={'10%'} height={15} />
      </Card>
    ))}
  </div>
);
