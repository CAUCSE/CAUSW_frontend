import { MoonLoader } from 'react-spinners';

import { LoadingWrapper } from './StyledPost';

const Loading = () => {
  return (
    <LoadingWrapper>
      <MoonLoader color="#312ed7" size={150} speedMultiplier={0.8} />
    </LoadingWrapper>
  );
};

export default Loading;
