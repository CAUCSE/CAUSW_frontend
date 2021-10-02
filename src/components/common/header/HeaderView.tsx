import { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from 'assets/icons/header_back_icon.svg';
import { ClearButton } from 'components/atoms/clear';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 55px;

  h2 {
    box-sizing: border-box;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0 55px;
    width: 100%;
    font-size: 20px;
    line-height: 55px;
    color: ${({ theme }) => theme.color.black.main};
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  > * {
    box-sizing: border-box;
    margin: 10px;
    width: 35px;
    height: 35px;
  }
`;

export const BackButton: React.FC<{ link?: string }> = memo(({ link }) => {
  const { goBack } = useHistory();

  const Icon = (
    <>
      <BackIcon />
      <span className="a11y-hidden">뒤로가기</span>
    </>
  );

  return (
    <ButtonWrapper>
      {link ? <Link to={link}>{Icon}</Link> : <ClearButton onClick={goBack}>{Icon}</ClearButton>}
    </ButtonWrapper>
  );
});
