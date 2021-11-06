import { memo } from 'react';
import { Header } from '@/components/header';
import { CircleLinks } from './components/CircleLinks';

export const PageHome: React.FC = memo(() => (
  <>
    <Header title="동문 네트워크" />
    <CircleLinks />
  </>
));
