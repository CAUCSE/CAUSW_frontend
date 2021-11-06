import { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ClearButton } from '../atoms/clear';

export const HeaderBackButton: React.FC<{ link?: string }> = memo(({ link }) => {
  const { goBack } = useHistory();

  const Icon = (
    <>
      <BackIcon />
      <span className="a11y-hidden">뒤로가기</span>
    </>
  );

  return link ? <Link to={link}>{Icon}</Link> : <ClearButton onClick={goBack}>{Icon}</ClearButton>;
});

const BackIcon = styled.img.attrs({ src: '/images/icons/back.svg', alt: 'back icon' })``;
