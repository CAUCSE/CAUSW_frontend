import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import { ListComponent } from '../CircleListFrame';
import { CircleSlideCard } from './CircleSlideCard';

export const CircleSlider: ListComponent = observer(({ items }) => {
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
        <CircleSlideCard key={item.id} {...item} />
      ))}
    </StyledCarousel>
  );
});

const StyledCarousel = styled(Carousel)`
  .slider {
    padding-bottom: 6px;
  }
`;
