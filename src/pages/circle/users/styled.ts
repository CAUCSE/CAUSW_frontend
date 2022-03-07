import styled from '@emotion/styled';
import SwipeableViews from 'react-swipeable-views';

import { PageBody as _PageBody } from '@/components';

export const PageBody = styled(_PageBody)`
  display: flex;
  flex-direction: column;
`;

export const SwipeableWrapper = styled(SwipeableViews)`
  flex: 1 0 0;

  .react-swipeable-view-container {
    height: 100%;
  }
`;
