import { useMediaQuery } from 'react-responsive';

export const useDeviceState = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:550px)',
  });
  return [isMobile];
};
