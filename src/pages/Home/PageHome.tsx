import { memo } from 'react';
import { DefaultLogo, Header } from '@/components/header';
import { CircleLinks } from './components/CircleLinks';

export const PageHome: React.FC = memo(() => (
  <>
    <Header title="동문 네트워크" Logo={DefaultLogo} />
    <CircleLinks />
  </>
));
