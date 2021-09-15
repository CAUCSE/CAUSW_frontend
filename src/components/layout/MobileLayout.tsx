import React from 'react';
import { BottomNavigation } from './BottomNavigation';

export const MobileLayout = (PageCompoenet: React.FC): React.FC =>
  React.memo(() => (
    <>
      <main>
        <PageCompoenet />
      </main>
      <BottomNavigation />
    </>
  ));
