import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { CircleMobileSlideCard } from './CircleMobileSlideCard';
import { ListComponent } from '../CircleListFrame';

export const CircleMobileSlider: ListComponent = observer(({ items }) => {
  const [config] = useState({
    autoPlay: false,
    // XXX: swipe 이후 자동으로 움직이는 버그가 있음
    // https://github.com/leandrowd/react-responsive-carousel/issues/621
    interval: 24 * 60 * 60 * 1000,
    showThumbs: false,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    useKeyboardArrows: false,
    centerMode: true,
    centerSlidePercentage: 80,
  });

  return (
    <StyledCarousel {...config}>
      {items.map(item => (
        <CircleMobileSlideCard key={item.id} model={item} />
      ))}
    </StyledCarousel>
  );
});

const StyledCarousel = styled(Carousel)`
  .slider {
    padding-bottom: 6px;
  }
`;
